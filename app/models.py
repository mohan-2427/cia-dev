from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.conf import settings
from django.utils import timezone
import datetime
from django.utils.translation import gettext_lazy as _

# Create your models here.
class Supplier(models.Model):
    name = models.CharField(max_length=255)  
    founder_name = models.CharField(max_length=255, blank=True, null=True)

    website_url = models.URLField(max_length=500, blank=True, null=True)
    logo = models.ImageField(upload_to="suppliers/logos/", blank=True, null=True)
    image = models.ImageField(upload_to="suppliers/images/", blank=True, null=True)
    category = models.CharField(max_length=255, blank=True, null=True)
    sub_category = models.CharField(max_length=255, blank=True, null=True)
    email = models.EmailField(max_length=255, blank=True, null=True)
    contact_person_name = models.CharField(max_length=255, blank=True, null=True)
    person_image = models.ImageField(upload_to="suppliers/person_images/", blank=True, null=True)

    # Product fields
    product1 = models.CharField(max_length=255, blank=True, null=True)
    product2 = models.CharField(max_length=255, blank=True, null=True)
    product3 = models.CharField(max_length=255, blank=True, null=True)

    # Split address fields
    door_number = models.CharField(max_length=50, blank=True, null=True)
    street = models.CharField(max_length=255, blank=True, null=True)
    area = models.CharField(max_length=255, blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    state = models.CharField(max_length=100, blank=True, null=True)
    pin_code = models.CharField(max_length=6, blank=True, null=True)

    # Expanded business details
    business_description = models.TextField(blank=True, null=True)

    phone_number = models.CharField(max_length=15, blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)
        return self.create_user(email, password, **extra_fields)

class CustomUser(AbstractUser):
    username = None
    email = models.EmailField(_('email address'), unique=True)
    
    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    class Meta:
        swappable = 'AUTH_USER_MODEL'

class PasswordResetOTP(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    otp = models.CharField(max_length=6)
    created_at = models.DateTimeField(auto_now_add=True)

    def is_valid(self):
        return timezone.now() < self.created_at + datetime.timedelta(minutes=10)
