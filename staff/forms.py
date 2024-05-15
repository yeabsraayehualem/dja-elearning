from django import forms 
from user.models import User 
from course.models import Course,CourseCategory

class UserForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super(UserForm, self).__init__(*args, **kwargs)
        for field_name, field in self.fields.items():
            field.widget.attrs['class'] = 'form-control'
    class Meta:
        model = User
        fields = ['first_name','last_name','role','email','profile_pic','address']

