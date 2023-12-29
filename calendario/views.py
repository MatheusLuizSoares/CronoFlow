# calendario/views.py
from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return render(request, "home.html")

def agenda(request):
    return render(request, "agenda.html")


def registro(request):
 if request.method=="GET":
  return render(request, "registro.html")
 else:
     nome=request.POST.get("name")   
     email=request.POST.get("email")  
     senha=request.POST.get("senha")
     return HttpResponse
# Se precisar, você também pode adicionar a função de login aqui
def login(request):

    return render(request, "login.html")

