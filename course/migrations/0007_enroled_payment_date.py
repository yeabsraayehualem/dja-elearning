# Generated by Django 4.2 on 2024-05-15 19:24

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0006_enroled_payment_status_enroled_ref_no'),
    ]

    operations = [
        migrations.AddField(
            model_name='enroled',
            name='payment_date',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
