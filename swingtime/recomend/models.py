from django.db import models

# Create your models here.

class Recomend(models.Model):
    age = models.IntegerField(blank=False, default=1)
    distance = models.IntegerField(blank=False, default=1)
    level = models.IntegerField(blank=False, default=1)
    swin = models.IntegerField(blank=False, default=1)
    weight = models.IntegerField(blank=False, default=1)
    first_name = models.CharField(max_length=70, blank=False)
    last_name = models.CharField(max_length=70, blank=False)
    swin_time = models.CharField(max_length=11, blank=False)
    gender_m = models.IntegerField(blank=False, default=1)  
    stroke_code_bk = models.IntegerField(blank=False, default=1)
    stroke_code_br = models.IntegerField(blank=False, default=1)
    stroke_code_fl = models.IntegerField(blank=False, default=1)
    stroke_code_fr = models.IntegerField(blank=False, default=1)
    stroke_code_im = models.IntegerField(blank=False, default=1)
