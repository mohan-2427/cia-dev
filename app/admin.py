from django.contrib import admin
from .models import Supplier

@admin.register(Supplier)
class SupplierAdmin(admin.ModelAdmin):
    list_display = (
        "name", 
        "business_description_display",
        "phone_number", 
        "formatted_address", 
        "created_at",
        'founder_name',
        'website_url',
        'category',
        'email',
        'contact_person_name'
    )
    
    def business_description_display(self, obj):
        """Display first 50 characters of business description"""
        if obj.business_description:
            return obj.business_description[:50] + "..." if len(obj.business_description) > 50 else obj.business_description
        return "-"
    business_description_display.short_description = "Business Description"
    
    def formatted_address(self, obj):
        """Format the address from individual fields"""
        address_parts = []
        if obj.door_number:
            address_parts.append(obj.door_number)
        if obj.street:
            address_parts.append(obj.street)
        if obj.area:
            address_parts.append(obj.area)
        if obj.city:
            address_parts.append(obj.city)
        if obj.state:
            address_parts.append(obj.state)
        if obj.pin_code:
            address_parts.append(obj.pin_code)
        
        return ", ".join(address_parts) if address_parts else "-"
    formatted_address.short_description = "Address"
