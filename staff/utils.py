from django.views import View
from django.shortcuts import redirect
from django.contrib import messages
class StaffView(View):
    def despatch(self,*args, **kwargs):
        if self.request.user.is_anonyms():
            return redirect("home:login")
        elif self.request.user.role !="staff":
            messages.error(self.request,"you are not a staff user.")
            return redirect('home:home')
        else:
            pass
        