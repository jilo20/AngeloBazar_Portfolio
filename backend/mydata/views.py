from django.shortcuts import render
from .models import Profile,Achievement,Image
from .serializers import AchievementSerializer,ImageSerializer,ProfileSerializer
from rest_framework import viewsets

class ProfileViewset(viewsets.ReadOnlyModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    
class AchievementViewset(viewsets.ReadOnlyModelViewSet):
    def get_queryset(self):
        getType = self.request.query_params.get('atype')
        queryset = Achievement.objects.prefetch_related('images')
        
        if getType:
            queryset = queryset.filter(atype=getType)
        
        return queryset
    serializer_class = AchievementSerializer
    
class ImageViewset(viewsets.ReadOnlyModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer