from django.contrib import admin
from .models import Course, Mentor, HeroSlide


@admin.register(Mentor)
class MentorAdmin(admin.ModelAdmin):
    list_display = ("sort_order", "name", "designation")
    list_editable = ("sort_order",)
    list_display_links = ("name",)
    ordering = ("sort_order", "id")
    search_fields = ("name", "designation")


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "duration", "price")


@admin.register(HeroSlide)   # ✅ You forgot this before
class HeroSlideAdmin(admin.ModelAdmin):
    list_display = ("position", "image")
    ordering = ("position",)
