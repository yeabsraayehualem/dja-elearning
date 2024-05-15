from django.urls import path 
from . import views

urlpatterns = [
    path('profile/', views.EditAccount.as_view(), name="edit_profile")
]
