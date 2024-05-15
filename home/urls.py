from django.urls import path 
from . import views
app_name= 'home'
urlpatterns = [
    path('/',views.home, name="home"),
    path('about/',views.about, name="about"),
    path('courses/',views.courses, name="course"),
    path('contact/',views.contact, name="contact"),
    path('login/', views.login_view, name='login'),
    path('signup/',views.signup, name="signup"),
    path('logout/', views.logout_view, name='logout'),
]
