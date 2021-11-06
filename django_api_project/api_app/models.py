from django.db import models
from django.contrib.contenttypes.fields import GenericRelation  

# Create your models here.
class Person(models.Model):
    person_id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=128, null=True)
    last_name = models.CharField(max_length=128, null=True)
    looking_for_projects = models.BooleanField(default=True)
    bio = models.CharField(max_length=1280, null=True, blank=True)
    profile_picutre = models.CharField(max_length=10000, null=True)
    video_link = models.CharField(max_length=10000, null=True)


class Skill(models.Model):
    skill_id = models.AutoField(primary_key=True)
    persons = models.ManyToManyField(Person)
    text = models.CharField(max_length=1280)

    def __str__(self):
        return (self.text)