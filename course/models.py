from django.db import models

from user.models import User
class CourseCategory(models.Model):
    name = models.CharField(max_length=255, blank=False, null=False)
    image = models.ImageField(upload_to="media/course-categories/images/", blank=False, null=False)
 
    
    def __str__(self):
        return self.name


class Course(models.Model):
    title= models.CharField(max_length=255,)
    rating = models.CharField(max_length=20)
    currently_enrolled = models.IntegerField()
    price= models.IntegerField()
    level =models.CharField(choices=[(i,i) for i in ['Beginner', "Intermediate",'Advanced']], max_length=120)
    duration= models.DurationField()
    category = models.ForeignKey(CourseCategory, on_delete=models.CASCADE)
    lessons=models.IntegerField()
    image= models.ImageField( upload_to="media/course/images/",)
    is_paid = models.BooleanField(default=False)
    instructor = models.ForeignKey(User, on_delete=models.CASCADE, blank=True,null=True)
    def __str__(self):
        return f"{self.title}"
    
    
class Enroled(models.Model):
    user = models.ForeignKey(User, on_delete= models.CASCADE)
    date_enroled= models.DateTimeField(auto_now_add=True)
    course= models.ForeignKey(Course, on_delete= models.PROTECT)
    payment_status = models.CharField(choices=[(i,i) for i in ['pending','complete','failed']], max_length=20)
    ref_no = models.CharField(max_length=1000)
    payment_date=models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"{self.user}- {self.course}"