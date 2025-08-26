from django.db import models

class Mentor(models.Model):
    name = models.CharField(max_length=200)
    designation = models.CharField(max_length=400)
    image = models.ImageField(upload_to='mentors/')
    sort_order = models.PositiveIntegerField(
        default=0,
        db_index=True,
        help_text="Lower number shows first"
    )

    class Meta:
        ordering = ["sort_order", "id"]

    def __str__(self):
        return self.name


class Course(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to="courses/")
    data_ai_hint = models.CharField(max_length=200, blank=True)
    duration = models.CharField(max_length=50)
    price = models.CharField(max_length=20)
    category = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title


class HeroSlide(models.Model):
    position = models.PositiveIntegerField(unique=True)  # 1 to 5 fixed
    image = models.ImageField(upload_to="hero_slides/")

    class Meta:
        ordering = ["position"]

    def __str__(self):
        return f"Slide {self.position}"
