from rest_framework import viewsets
from .models import Course, Mentor, HeroSlide
from .serializers import CourseSerializer, MentorSerializer, HeroSlideSerializer


class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class MentorViewSet(viewsets.ModelViewSet):
    queryset = Mentor.objects.all()
    serializer_class = MentorSerializer


class HeroSlideViewSet(viewsets.ModelViewSet):
    queryset = HeroSlide.objects.all().order_by("position")
    serializer_class = HeroSlideSerializer
