from django.db import models
class CourseCategory(models.Model):
    name = models.CharField(max_length=255, blank=False, null=False)
    image = models.ImageField(upload_to="course-categories/images/", blank=False, null=False)
 
    
    def __str__(self):
        return self.name
