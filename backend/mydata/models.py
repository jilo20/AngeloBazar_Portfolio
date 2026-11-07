from django.db import models

class Profile(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    contact_num = models.CharField(max_length=15)
    skills = models.TextField(max_length=100)
    
class Achievement(models.Model):
    type_choices = [('AWARD','Award'), ('PROJECT','Project')]
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    atype = models.CharField(max_length=10,choices=type_choices)
    
class Image(models.Model):
    name = models.CharField(max_length=100)
    achievement = models.ForeignKey(Achievement,on_delete=models.CASCADE,related_name='images')
    img =  models.ImageField(upload_to='images/')
    