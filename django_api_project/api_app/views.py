from django.shortcuts import render
from .models import Person, Skill
from .serializers import SkillSerializer, PersonSerializer
from rest_framework import generics

class PersonListCreate(generics.ListCreateAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer

class SkillListCreate(generics.ListCreateAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer