from rest_framework import viewsets
from .models import Employee, Student, Payment, FinancialOperation
from .serializers import (
    EmployeeSerializer,
    StudentSerializer,
    PaymentSerializer,
    FinancialOperationSerializer
)


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer


class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer


class FinancialOperationViewSet(viewsets.ModelViewSet):
    queryset = FinancialOperation.objects.all()
    serializer_class = FinancialOperationSerializer