# Generated by Django 4.2 on 2024-05-13 06:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='role',
            field=models.CharField(choices=[('staff', 'staff'), ('user', 'user'), ('student', 'student'), ('instructor', 'instructor')], max_length=100),
        ),
    ]
