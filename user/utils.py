from django.views import View
from django.contrib import messages
from django.shortcuts import redirect
class ActiveUserView(View):
    
    def dispatch(self,  *args, **kwargs):
        if self.request.user.is_anonymous:
            return redirect("home:login")
        elif self.request.user.role in ['staff','student','instructor']:
            print(self.request.user.role)
            pass
        else:
            
            pass
        print("out of here")
    