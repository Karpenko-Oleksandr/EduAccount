from rest_framework import serializers
from .models import Employee, Student, Payment, FinancialOperation


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'


class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'


class FinancialOperationSerializer(serializers.ModelSerializer):
    class Meta:
        model = FinancialOperation
        fields = '__all__'