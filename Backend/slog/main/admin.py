
from django.contrib import admin
from django.utils.html import format_html
from .models import Course, Mentor,HeroSlide, Gallery


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
    search_fields = ("title", "category")


@admin.register(Gallery)
class GalleryAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "category", "image_preview", "created_at")
    list_filter = ("category",)   # ✅ filter by category in sidebar
    search_fields = ("title",)
    readonly_fields = ("image_preview",)
    ordering = ("category", "-created_at")

    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="80" style="border-radius:4px;" />', obj.image.url)
        return "No Image"

    image_preview.short_description = "Preview"


@admin.register(HeroSlide)   # ✅ You forgot this before
class HeroSlideAdmin(admin.ModelAdmin):
    list_display = ("position", "image")
    ordering = ("position",)

