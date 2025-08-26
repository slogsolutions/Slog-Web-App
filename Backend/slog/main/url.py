from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from slog import settings
from main.views import CourseViewSet, MentorViewSet, GalleryViewSet, HeroSlideViewSet
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter

router = routers.DefaultRouter()
router.register(r'courses', CourseViewSet)
router.register(r'mentors', MentorViewSet)
router.register(r'hero-slides', HeroSlideViewSet, basename='heroslide')
router.register(r'gallery', GalleryViewSet)   # ✅ add this

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
# # main/urls.py
# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import CourseViewSet, MentorViewSet, HeroSlideViewSet
# from django.conf import settings
# from django.conf.urls.static import static

# router = DefaultRouter()
# router.register(r'courses', CourseViewSet, basename='course')
# router.register(r'mentors', MentorViewSet, basename='mentor')
# router.register(r'hero-slides', HeroSlideViewSet, basename='heroslide')

# urlpatterns = [
#     path('', include(router.urls)),
# >>>>>>> a1da62899e236c57fb4b7f3d05840ec6bff3f7b1
# ]
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
