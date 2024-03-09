from django.db import models

class Store (models.Model):
    name = models.CharField(max_length=100)
    storeCode = models.CharField(max_length=20)
    location = models.CharField(max_length=20)
    phonenumber =models.CharField(max_length=20)
    remark = models.CharField(max_length = 100)
