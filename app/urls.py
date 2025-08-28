from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('category/', views.category, name='category'),
    path('announcement/', views.announcement, name='announcement'),
    path('signup/', views.signup_view, name='signup'),
    path('suppliers/', views.suppliers, name='suppliers'),
    
    # Authentication URLs
    path("login/", views.login_view, name="login"),
    path("logout/", views.user_logout, name="logout"),
    path("password-reset/", views.request_password_reset, name="request_reset"),
    path("verify-otp/", views.verify_otp, name="verify_otp"),
    path("resend-otp/", views.resend_otp, name="resend_otp"),
    path("set-new-password/", views.set_new_password, name="set_new_password"),
    path("supplier/<int:supplier_id>/", views.supplier_details, name="supplier_details"),
    path('supplier/<int:supplier_id>/details/', views.supplier_details, name='supplier_details'),
]
