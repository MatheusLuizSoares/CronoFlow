# calendario/views.py
from django.contrib.auth.models import User
from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth import authenticate
from django.contrib.auth import login as login_django
from django.contrib.auth.decorators import login_required

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
         login_django(request,user)
         return HttpResponse("autenticado")
     else:
         return HttpResponse("Email ou senha invalidos")
     
@login_required(login_url="/calendario/login/")
def plataforma(resquest):
    return HttpResponse("prataforma")

