from django.db import models
from student.models import Student

# Create your models here.

class Student(models.Model):
    firstname = models.CharField(max_length=100)
    middlename = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)




class Course(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    instructor = models.CharField(max_length=100)
    students = models.ManyToManyField(Student, related_name='courses')



class Payment(models.Model):
    user = models.ForeignKey(Student, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    timestamp = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=[
        ('pending', 'Pending'),
        ('completed', 'Completed'),
        ('failed', 'Failed'),
    ])
    transaction_id = models.CharField(max_length=100)
    payment_method = models.CharField(max_length=50)


    def str(self):
      return f'payment ID: {self.id},Student: {self.username},Amount: {self.amount},Status: {self.status}'
        



