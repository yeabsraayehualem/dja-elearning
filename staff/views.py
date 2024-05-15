from django.shortcuts import render

from course.models import Enroled
from staff.utils import StaffView
from user.models import User
from django.utils.timezone import timedelta,datetime
# Create your views here.
class Dashboard(StaffView):
    def get(self,*args, **kwargs):
        last_month = datetime.now().date() - timedelta(days=30)
        gp= []
        # TODO: add the total gaines per day for the last 15 days
        context={
            'students': User.objects.filter(role='student',date_joined__date__gte= last_month).count(),
            'entolements': Enroled.objects.filter(date_enroled__date__gte= last_month),
            'total': sum([i.course.price for i in Enroled.objects.filter(payment_status="complete")]),
            'graph_prices':gp,
            "users":User.objects.all(),
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