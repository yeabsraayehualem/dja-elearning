from django.shortcuts import render,redirect
from django.contrib import messages

from course.models import Course, CourseCategory
from home.forms import AuthenticationForm, UserForm

# Create your views here.
def home(req):
    return render(req,'index.html',{'courseCategory':CourseCategory.objects.all(),'course': Course.objects.all()})

def about(req):
    return render(req,'about.html')

def courses(req):
    return render(req,'courses.html',{'courseCategory':CourseCategory.objects.all(),'course': Course.objects.all()})

def contact(req):
    return render(req,'contact.html')

from django.contrib.auth import authenticate, login,logout

def login_view(request):
    error_message=''
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        print("Email:", email)
        print("Password:", password)

        user = authenticate(request, email=email, password=password)

        if user is not None:
            login(request, user)
            print("User authenticated successfully.",user.role)
            
            if user.role == "staff":
                print("User role:", user.role)
                return redirect('staff:index')
            # elif user.role == 'student':
            #       return redirect('hotel:hotel_dashboard')
            # elif user.role == 'teacher':
            #       return redirect('transport:dashboard')  
            # elif user.role == "user":
            #     return redirect('admins:index')
        else:
            error_message = "Invalid username or password. Please try again."

    form = AuthenticationForm()
    
    context= {'form': form}
    if error_message:
        context['error_message']= error_message
    if request.user.is_anonymous:
    
        return render(request, 'login.html',context)
    else:
        return redirect('/')

def signup(req):
    if req.method == "POST":
        form= UserForm(req.POST)
        if form.is_valid():
            form.save()
            
            messages.success(req,'Registration Successful!')
            return redirect('home:login')
    form= UserForm()
    
    return render(req,'signup.html',{'form':form})

def logout_view(req):
    logout(req.user)
    return redirect('home:home')

# def login_view(req):
#     return render(req,'login.html')

# def login_view(req):
#     return render(req,'login.html')