from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.core.mail import send_mail
from django.contrib import messages
from django.db import models
import random
from .models import Supplier, CustomUser, PasswordResetOTP
from django.http import JsonResponse
from .forms import SupplierForm

def index(request):
    context = {
        'user': request.user
    }
    return render(request, "index.html", context)

def about(request):
    return render(request, "about.html")

def announcement(request):
    return render(request, "announcement.html")

def category(request):
    return render(request, "category.html")

def login_view(request):
    if request.method == "POST":
        email = request.POST.get('email')
        password = request.POST.get('password')
        
        try:
            user = authenticate(request, username=email, password=password)
            if user is not None:
                login(request, user)
                messages.success(request, f"Welcome back, {user.email}!")
                return redirect('index')
            else:
                messages.error(request, "Invalid email or password.")
        except Exception as e:
            messages.error(request, "An error occurred. Please try again.")
            
    return render(request, "login.html")

def signup_view(request):
    return render(request, "signup.html")

def suppliers(request):
    category = request.GET.get('category', '')
    sub_category = request.GET.get('sub_category', '')
    product_filter = request.GET.get('product', '')
    search_query = request.GET.get('search', '')

    suppliers = Supplier.objects.all()

    if category:
        suppliers = suppliers.filter(category=category)
    
    if sub_category:
        suppliers = suppliers.filter(sub_category=sub_category)
    
    if product_filter:
        suppliers = suppliers.filter(
            models.Q(product1__icontains=product_filter) |
            models.Q(product2__icontains=product_filter) |
            models.Q(product3__icontains=product_filter)
        )

    if search_query:
        suppliers = suppliers.filter(name__icontains=search_query)

    count = suppliers.count()

    return render(request, "suppliers.html", {
        "suppliers": suppliers,
        "categories": Supplier.objects.values_list('category', flat=True).distinct(),
        "sub_categories": Supplier.objects.values_list('sub_category', flat=True).distinct(),
        "products": list(set(
            list(Supplier.objects.values_list('product1', flat=True).distinct()) +
            list(Supplier.objects.values_list('product2', flat=True).distinct()) +
            list(Supplier.objects.values_list('product3', flat=True).distinct())
        )),
        "count": count,
    })

def create_supplier(request):
    if request.method == 'POST':
        form = SupplierForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('suppliers')
    else:
        form = SupplierForm()
    return render(request, 'create_supplier.html', {'form': form})

def user_logout(request):
    logout(request)
    return redirect('index')

def send_otp_email(user):
    otp = str(random.randint(100000, 999999))
    PasswordResetOTP.objects.create(user=user, otp=otp)
    send_mail(
        "Password Reset OTP",
        f"Your OTP for password reset is {otp}",
        "yourgmail@gmail.com",
        [user.email],
    )

def request_password_reset(request):
    if request.method == "POST":
        email = request.POST["email"]
        try:
            user = CustomUser.objects.get(email=email)
            send_otp_email(user)
            return render(request, "verify_otp.html", {"email": email})
        except CustomUser.DoesNotExist:
            return render(request, "request_reset.html", {"error": "Email not found"})
    return render(request, "request_reset.html")

def verify_otp(request):
    if request.method == "POST":
        email = request.POST["email"]
        otp = request.POST["otp"]
        user = CustomUser.objects.get(email=email)
        otp_obj = PasswordResetOTP.objects.filter(user=user, otp=otp).last()
        if otp_obj and otp_obj.is_valid():
            return render(request, "set_new_password.html", {"email": email})
        else:
            return render(request, "verify_otp.html", {"error": "Invalid or expired OTP", "email": email})

def set_new_password(request):
    if request.method == "POST":
        email = request.POST["email"]
        password = request.POST["password"]
        confirm_password = request.POST["confirm_password"]
        
        if password != confirm_password:
            return render(request, "set_new_password.html", {"error": "Passwords don't match", "email": email})
        
        try:
            user = CustomUser.objects.get(email=email)
            user.set_password(password)
            user.save()
            return redirect('login')
        except CustomUser.DoesNotExist:
            return render(request, "set_new_password.html", {"error": "User not found", "email": email})
    
    return render(request, "set_new_password.html")

def google_login(request):
    # Redirect to Google OAuth2 login using allauth's built-in view
    from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
    from allauth.socialaccount.providers.oauth2.client import OAuth2Client
    from allauth.socialaccount.views import signup
    
    # This will redirect to the Google OAuth2 login page
    adapter = GoogleOAuth2Adapter(request)
    client = OAuth2Client(
        request,
        adapter.get_client_id(),
        adapter.get_client_secret(),
        adapter.get_access_token_method(),
        adapter.get_access_token_url(),
        adapter.get_callback_url(),
        adapter.get_scope()
    )
    
    # Get the authorization URL and redirect
    authorization_url = client.get_redirect_url(adapter.get_authorize_url())
    return redirect(authorization_url)

def resend_otp(request):
    if request.method == "POST":
        email = request.POST["email"]
        try:
            user = CustomUser.objects.get(email=email)
            send_otp_email(user)
            messages.success(request, "Verification code has been resent to your email.")
            return render(request, "verify_otp.html", {"email": email})
        except CustomUser.DoesNotExist:
            messages.error(request, "Email not found.")
            return render(request, "request_reset.html", {"error": "Email not found"})
    
    return redirect('request_reset')
