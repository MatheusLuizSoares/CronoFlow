from django.shortcuts import render
from django.http import HttpResponse

def home(request):
 return render(request,"home.html")
def agenda(request):
 return agenda(request,"agenda.html")
  