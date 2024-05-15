from django.shortcuts import render, redirect
from .forms import StudentRegistrationForm
from .models import Course
from .forms import CourseRegistrationForm

def register_student(request):
    if request.method == 'POST':
        form = StudentRegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('registration_success')
    else:
        form = StudentRegistrationForm()
    return render(request, 'registeraccount.html', {'form': form})


def course_list(request):
    courses = Course.objects.all()
    return render(request, 'mycourses.html', {'courses': courses})

def enroll_course(request, course_id):
    course = Course.objects.get(id=course_id)
    if request.method == 'POST':
        # Handle form submission
        # Add the current user to the course's students
        course.students.add(request.user)
        return redirect('mycourses')
    else:
        form = CourseRegistrationForm(instance=course)
    return render(request, 'learncourse.html', {'form': form, 'courses': course})


