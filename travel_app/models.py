from django.db import models
from django.contrib.auth.models import User

class SavedDestination(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    destination_name = models.CharField(max_length=255)
    destination_url = models.URLField()
    added_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.destination_name}"


class Destination(models.Model):
    name = models.CharField(max_length=255)
    image_url = models.ImageField(upload_to='destinations/', blank=True, null=True)
    location = models.CharField(max_length=255)
    listings = models.IntegerField(default=10)

    def __str__(self):
        return self.name
