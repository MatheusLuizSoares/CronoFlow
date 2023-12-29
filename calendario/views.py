# calendario/views.py
from django.contrib.auth.models import User
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
     
     user=User.objects.filter(nome=nome).first()
     if user:
         return HttpResponse("já existe um usuario com esse nome")
     
     user = User.objects.create_user(username=nome, email=email, password=senha)  
     
     return HttpResponse("usuario cadastrado com sucesso")
# Se precisar, você também pode adicionar a função de login aqui
def login(request):

    return render(request, "login.html")

