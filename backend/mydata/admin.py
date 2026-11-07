from django.contrib import admin
from .models import (Profile,Achievement,Image)

# Register your models here.
admin.site.register(Profile)
admin.site.register(Achievement)
admin.site.register(Image)