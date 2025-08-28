from django import forms
from .models import Supplier

class SupplierForm(forms.ModelForm):
    class Meta:
        model = Supplier
        fields = [
            'name', 'founder_name', 'website_url', 'logo', 'image', 
            'category', 'sub_category', 'email', 'contact_person_name', 
            'person_image', 'product1', 'product2', 'product3', 
            'door_number', 'street', 'area', 'city', 'state', 
            'pin_code', 'business_description', 'phone_number'
        ]  # Explicitly include all fields from the Supplier model
