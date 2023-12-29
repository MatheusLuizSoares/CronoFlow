# calendario/views.py
from django.contrib.auth.models import User
from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth import authenticate,login

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
     
     user=User.objects.filter(username=nome).first()
     if user:
         return HttpResponse("já existe um usuario com esse nome")
     
     user = User.objects.create_user(username=nome, email=email, password=senha)  
     
     return HttpResponse("usuario cadastrado com sucesso")

def login(request):
 if request.method=="GET":
    return render(request, "login.html")
 else:
     username= request.POST.get("username")
     senha= request.POSt.get("senha")
     
     user=authenticate(username=username, password=senha)
     
     if user:
         login(request,user)
         return HttpResponse("autenticado")
     else:
         return HttpResponse("Email ou senha invalidos")
     
def plataforma(resquest):
    return HttpResponse("plataforma")
    

