from django.urls import path 
from . import views
app_name= 'staff'
urlpatterns = [
    path('dashboard/',views.Dashboard.as_view(), name='index'),
    path('users/', views.UsersTab.as_view(), name='users'),
    path('users/<str:role>/',views.UsersList.as_view(),name='users_list'),
    path('user-detail/<int:id>/', views.UsersDetail.as_view(), name='user_detail'),
    path('course/', views.CourseTab.as_view(), name='course'),
    path('course/<str:role>/',views.CourseList.as_view(),name='course_list'),
    path('course-detail/<int:id>/', views.CourseDetail.as_view(), name='course_detail'),
]
