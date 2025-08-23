from django.contrib import admin
from .models import Course, Mentor

@admin.register(Mentor)
class MentorAdmin(admin.ModelAdmin):
    list_display = ("sort_order", "name", "designation")
    list_editable = ("sort_order",)          # <- editable in the changelist
    list_display_links = ("name",)           # <- make name the link (required for list_editable on first col)
    ordering = ("sort_order", "id")          # <- admin list sorted the same way
    search_fields = ("name", "designation")

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "duration", "price")