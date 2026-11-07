from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path,include
import mydata.urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('mydata/', include(mydata.urls))
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
