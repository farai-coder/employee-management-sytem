__author__ = 'Farai Rato'
__date__created = "12 April 2023"

from django import forms
from .models import Company, Employee

class CompanyForm(forms.ModelForm):
    class Meta:
        model = Company
        fields = ['name', 'date_of_registration', 'registration_number', 'address', 'contact_person', 'number_of_employees', 'contact_phone', 'email']
