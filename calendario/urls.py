# calendario/urls.py
from unicodedata import name
# calendario/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('agenda/', views.agenda, name='agenda'),
    path('registro/', views.registro, name="registro"), 
    path('login/', views.login, name="LOGIN")  
]
