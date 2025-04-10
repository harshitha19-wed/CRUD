from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RegisterViewSet

router = DefaultRouter()
router.register(r'registers', RegisterViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
