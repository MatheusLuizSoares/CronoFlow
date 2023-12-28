# calendario/views.py
from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return render(request, "home.html")

def agenda(request):
    return render(request, "agenda.html")


def registro(request):
    # Adicione a lógica para a página de registro aqui
    return render(request, "registro.html")

# Se precisar, você também pode adicionar a função de login aqui
def login(request):
    # Adicione a lógica de login aqui
    return render(request, "login.html")
