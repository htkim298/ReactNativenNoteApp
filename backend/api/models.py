from django.db import models

# Create your models here.
class TestCase(models.Model):
    Title = models.CharField(max_length=100)
    Name = models.CharField(max_length=100)