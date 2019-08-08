from django.shortcuts import render
from django.http import HttpResponse
from .models import Greeting
# import requests

# Create your views here.
def index(request):
    # return HttpResponse('Hello from Python!')
    return render(request, "index.html")


def db(request):

    greeting = Greeting()
    greeting.save()

    greetings = Greeting.objects.all()

    return render(request, "db.html", {"greetings": greetings})

def upload(request):
    return render(request, "upload.html")

def profile(request):
    return render(request, "profile.html")

def submission(request):
    return render(request, "submission.html")

#def urlname(request):
#    return render(request, "urlname.html")



# GRACENOTE API
#filename = 
