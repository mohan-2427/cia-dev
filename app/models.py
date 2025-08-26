from django.db import models

# Create your models here.
from django.db import models

class Supplier(models.Model):
    name = models.CharField(max_length=255)  
    founder_name = models.CharField(max_length=255, blank=True, null=True)

    website_url = models.URLField(max_length=500, blank=True, null=True)
    logo = models.ImageField(upload_to="suppliers/logos/", blank=True, null=True)
    image = models.ImageField(upload_to="suppliers/images/", blank=True, null=True)
    category = models.CharField(max_length=255, blank=True, null=True)
    email = models.EmailField(max_length=255, blank=True, null=True)
    contact_person_name = models.CharField(max_length=255, blank=True, null=True)

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