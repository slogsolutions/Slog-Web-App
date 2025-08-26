# from django.db import models

# class Mentor(models.Model):
#     name = models.CharField(max_length=200)
#     designation = models.CharField(max_length=400)
#     image = models.ImageField(upload_to='mentors/')
#     sort_order = models.PositiveIntegerField(
#         default=0,
#         db_index=True,
#         help_text="Lower number shows first"
#     )

#     class Meta:
#         ordering = ["sort_order", "id"]  # <- ensures every query returns mentors in this order

#     def __str__(self):
#         return self.name


# class Course(models.Model):
#     title = models.CharField(max_length=100)
#     image = models.ImageField(upload_to="courses/")
#     data_ai_hint = models.CharField(max_length=200, blank=True)
#     duration = models.CharField(max_length=50)
#     price = models.CharField(max_length=20)
#     category = models.CharField(max_length=100)
#     description = models.TextField(blank=True, null=True)

#     def __str__(self):
#         return self.title
    


#     # ✅ New Gallery Model
# class Gallery(models.Model):
#     title = models.CharField(max_length=200, blank=True, null=True)
#     image = models.ImageField(upload_to="gallery/")
#     created_at = models.DateTimeField(auto_now_add=True)

#     class Meta:
#         ordering = ["-created_at"]

#     def __str__(self):
#         return self.title if self.title else f"Image {self.id}"


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


class Gallery(models.Model):
    CATEGORY_CHOICES = [
        ("corporate", "Corporate"),
        ("defence", "Defence"),
        ("government", "Government"),
        ("water", "Water"),
        ("fire", "Fire")
    ]

    title = models.CharField(max_length=200, blank=True, null=True)
    category = models.CharField(
        max_length=50,
        choices=CATEGORY_CHOICES,
        default="corporate"
    )
    image = models.ImageField(upload_to="gallery/")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["category", "-created_at"]  # ✅ group by category first

    def __str__(self):
        return f"{self.title or 'Image'} ({self.get_category_display()})"
