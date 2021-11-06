from django.urls import path
from . import views

urlpatterns = [
    path('api/person/', views.PersonListCreate.as_view() ),
    path('api/skill/', views.SkillListCreate.as_view() ),
]