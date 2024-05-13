from django.shortcuts import render,redirect
from django.contrib import messages

from course.models import Course, CourseCategory
from home.forms import UserForm

# Create your views here.
def home(req):
    return render(req,'index.html',{'courseCategory':CourseCategory.objects.all(),'course': Course.objects.all()})

def about(req):
    return render(req,'about.html')

def courses(req):
    return render(req,'courses.html',{'courseCategory':CourseCategory.objects.all(),'course': Course.objects.all()})

def contact(req):
    return render(req,'contact.html')

def login_view(req):
    return render(req,'login.html')

def signup(req):
    if req.method == "POST":
        form= UserForm(req.POST)
        if form.is_valid():
            form.save()
            
            messages.success(req,'Registration Successful!')
            return redirect('home:login')
    form= UserForm()
    
    return render(req,'signup.html',{'form':form})

# def login_view(req):
#     return render(req,'signup.html')

# def login_view(req):
#     return render(req,'login.html')

# def login_view(req):
#     return render(req,'login.html')