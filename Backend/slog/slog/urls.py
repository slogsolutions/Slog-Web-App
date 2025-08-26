from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from slog import settings
from main.views import CourseViewSet, MentorViewSet, GalleryViewSet

from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'courses', CourseViewSet)
router.register(r'mentors', MentorViewSet)
router.register(r'gallery', GalleryViewSet) 


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('url/', include(router.urls)),
    


]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)