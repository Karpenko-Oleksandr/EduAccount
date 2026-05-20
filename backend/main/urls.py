from rest_framework.routers import DefaultRouter
from .views import (
    EmployeeViewSet,
    StudentViewSet,
    PaymentViewSet,
    FinancialOperationViewSet
)

router = DefaultRouter()

router.register(r'employees', EmployeeViewSet)
router.register(r'students', StudentViewSet)
router.register(r'payments', PaymentViewSet)
router.register(r'operations', FinancialOperationViewSet)

urlpatterns = router.urls