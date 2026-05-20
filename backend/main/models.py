from django.db import models


class Employee(models.Model):
    full_name = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20)

    def __str__(self):
        return self.full_name


class Student(models.Model):
    full_name = models.CharField(max_length=255)
    faculty = models.CharField(max_length=255)
    course = models.IntegerField()
    scholarship = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.full_name


class Payment(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_date = models.DateField()
    description = models.TextField()

    def __str__(self):
        return f"{self.student.full_name} - {self.amount}"


class FinancialOperation(models.Model):
    OPERATION_TYPES = [
        ('income', 'Income'),
        ('expense', 'Expense'),
    ]

    title = models.CharField(max_length=255)
    operation_type = models.CharField(max_length=10, choices=OPERATION_TYPES)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    operation_date = models.DateField()

    def __str__(self):
        return self.title