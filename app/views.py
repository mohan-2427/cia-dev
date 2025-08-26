from django.shortcuts import render, redirect
from .models import Supplier
from .forms import SupplierForm  # Ensure you have a form for Supplier

def index(request):
    return render(request, "index.html")

def about(request):
    return render(request, "about.html")

def announcement(request):
    return render(request, "announcement.html")

def category(request):
    return render(request, "category.html")

def login(request):  # Changed from login to login_view
    return render(request, "login.html")

def signup(request):  # Changed from signup to signup_view
    return render(request, "signup.html")

def suppliers(request):
    category = request.GET.get('category', '')
    search_query = request.GET.get('search', '')

    suppliers = Supplier.objects.all()

    if category:
        suppliers = suppliers.filter(category=category)

    if search_query:
        suppliers = suppliers.filter(name__icontains=search_query)

    count = suppliers.count()

    return render(request, "suppliers.html", {
        "suppliers": suppliers,
        "categories": Supplier.objects.values_list('category', flat=True).distinct(),
        "count": count,
    })

def create_supplier(request):
    if request.method == 'POST':
        form = SupplierForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('suppliers')  # Redirect to the suppliers page after saving
    else:
        form = SupplierForm()
    return render(request, 'create_supplier.html', {'form': form})
