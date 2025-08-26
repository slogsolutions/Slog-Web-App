from rest_framework import viewsets
from .models import Course
from .serializers import CourseSerializer
from .models import Mentor
from .serializers import MentorSerializer
from .models import Course, Mentor, Gallery
from .serializers import CourseSerializer, MentorSerializer, GallerySerializer
from .models import Gallery
from .serializers import GallerySerializer
from .models import Course, Mentor, HeroSlide
from .serializers import CourseSerializer, MentorSerializer, HeroSlideSerializer


class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class MentorViewSet(viewsets.ModelViewSet):
    queryset = Mentor.objects.all()
    serializer_class = MentorSerializer

class GalleryViewSet(viewsets.ModelViewSet):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer

    

class HeroSlideViewSet(viewsets.ModelViewSet):
    queryset = HeroSlide.objects.all().order_by("position")
    serializer_class = HeroSlideSerializer
