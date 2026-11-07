from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .models import Profile,Achievement,Image
from .views import ProfileViewset,AchievementViewset,ImageViewset

router = DefaultRouter()
router.register("profile",ProfileViewset, basename='profile')
router.register("achievements",AchievementViewset, basename='achievements')
router.register("images",ImageViewset, basename='images')

urlpatterns = [
    path('', include(router.urls))
]