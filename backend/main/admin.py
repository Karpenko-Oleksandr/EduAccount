from django.contrib import admin
from .models import Employee, Student, Payment, FinancialOperation


admin.site.register(Employee)
admin.site.register(Student)
admin.site.register(Payment)
admin.site.register(FinancialOperation)