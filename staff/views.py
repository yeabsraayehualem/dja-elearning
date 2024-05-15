from django.shortcuts import render

from staff.utils import StaffView
from user.models import User
from django.utils.timezone import timedelta,datetime
# Create your views here.
class Dashboard(StaffView):
    def get(self,*args, **kwargs):
        last_month = datetime.now().date() - timedelta(days=30)
        context={
            'students': User.objects.filter(role='student',date_joined__date__gte= last_month).count()
        }
        return render(self.request,'staff/index.html',context)
    def post(self,*args, **kwargs):
        pass
class UsersTab(StaffView):
    
    def get(self,*args, **kwargs):
        pass
    def post(self,*args, **kwargs):
        pass
    
    
    
    
class UsersList(StaffView):
    def get(self,*args, **kwargs):
        pass
    def post(self,*args, **kwargs):
        pass


class UsersDetail(StaffView):
    def get(self,*args, **kwargs):
        pass
    def post(self,*args, **kwargs):
        pass
    
    
class CourseTab(StaffView):
    def get(self,*args, **kwargs):
        pass
    def post(self,*args, **kwargs):
        pass

class CourseList(StaffView):
    def get(self,*args, **kwargs):
        pass
    def post(self,*args, **kwargs):
        pass

class CourseDetail(StaffView):
    def get(self,*args, **kwargs):
        pass
    def post(self,*args, **kwargs):
        pass