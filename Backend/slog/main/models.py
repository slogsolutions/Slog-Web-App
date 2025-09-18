from django.db import models
from cloudinary_storage.storage import MediaCloudinaryStorage


class Mentor(models.Model):
    name = models.CharField(max_length=200)
    designation = models.CharField(max_length=400)
    # image = models.ImageField(upload_to='mentors/')
    image = models.ImageField(
        upload_to='mentors/',
        storage=MediaCloudinaryStorage()
    )
    sort_order = models.PositiveIntegerField(
        default=0,
        db_index=True,
        help_text="Lower number shows first"
    )

    class Meta:
        ordering = ["sort_order", "id"]

    def __str__(self):
        return self.name



CATEGORY_CHOICES = [
    ("All Courses", "All Courses"),
    ("Computer Science", "Computer Science"),
    ("Civil Tools", "Civil Tools"),
    ("Mechanical Tools", "Mechanical Tools"),
    ("Architecture", "Architecture"),
    ("Specialized", "Specialized"),
    ("Networking", "Networking"),
    ("Creative Arts", "Creative Arts"),
]

class Course(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to="courses/")
    data_ai_hint = models.CharField(max_length=200, blank=True)
    duration = models.CharField(max_length=50)
    price = models.CharField(max_length=20)
    category = models.CharField(
        max_length=100,
        choices=CATEGORY_CHOICES,
    )
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title


class Gallery(models.Model):
    CATEGORY_CHOICES = [
    ("development", "Development"),
    ("corporate_defence_trainings", "Corporate & Defence Trainings"),
    ("outbound_trainings", "Outbound Trainings"),
    ("ministry_of_defence", "Ministry of Defence"),
    ("student_trainings", "Student Trainings"),
    ("achievements", "Achievements & Moments"),  # For photos, momentos, certificates
]

    title = models.CharField(max_length=200, blank=True, null=True)
    category = models.CharField(
        max_length=50,
        choices=CATEGORY_CHOICES,
        default="corporate"
    )
    image = models.ImageField(
        upload_to="gallery/",
        storage=MediaCloudinaryStorage(),
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["category", "-created_at"]  # ✅ group by category first

    def __str__(self):
        return f"{self.title or 'Image'} ({self.get_category_display()})"
class HeroSlide(models.Model):
    position = models.PositiveIntegerField(unique=True)  # 1 to 5 fixed
    image = models.ImageField(upload_to="hero_slides/")

    class Meta:
        ordering = ["position"]

    def __str__(self):
        return f"Slide {self.position}"
