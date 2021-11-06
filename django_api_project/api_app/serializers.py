from rest_framework import serializers
from .models import Person, Skill


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ('person_id', 'first_name', 'last_name', 'looking_for_projects', 'bio', 'profile_picutre', 'video_link')

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ('skill_id', 'persons', 'text')