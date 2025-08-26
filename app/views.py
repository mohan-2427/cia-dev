from django.shortcuts import render

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
    return render(request, "suppliers.html")