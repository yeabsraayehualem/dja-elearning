from django.shortcuts import render
from django.views import View
from .utils import ActiveUserView
from django.shortcuts import redirect

# Create your views here.
class EditAccount(View):
    
       
    def get(self, *args, **kwargs):
        if self.request.user.is_anonymous:
            return redirect("home:login")
        elif self.request.user.role in ['staff','student','instructor']:
            print(self.request.user.role)
            pass
        print('here')  # This line is optional, can be removed
        return render(self.request, 'staff/pages/Account/editaccount.html')

    def post(self, *args, **kwargs):
        # Implement your logic to handle POST requests here (optional)
        pass