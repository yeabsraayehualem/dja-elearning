from django.views import View
from django.shortcuts import redirect
from django.contrib import messages
class TeacherView(View):
    def despatch(self,*args, **kwargs):
        if self.request.user.is_anonymous:
            return redirect("home:login")
        elif self.request.user.role !="teacher":
            messages.error(self.request,"you are not a Teacher user.")
            return redirect('home:home')
        else:
            pass
        