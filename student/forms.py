from django import forms
from .models import Student
from .models import Course

class StudentRegistrationForm(forms.ModelForm):
    class Meta:
        model = Student
        fields = ['firstname','middlename','lastname', 'email', 'password']




class CourseRegistrationForm(forms.ModelForm):
    class Meta:
        model = Course
        fields = ['name', 'description', 'instructor']
