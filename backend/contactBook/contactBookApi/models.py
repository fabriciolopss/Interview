from django.db import models
import uuid

class Contact(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=40)
    created_at = models.DateTimeField(auto_now_add=True, blank=True)
    cellphone_number = models.CharField(max_length=20)
    description = models.CharField(max_length=300)
    job = models.CharField(max_length=300)
    birth_date = models.CharField(max_length=30)
    profile_photo = models.CharField(max_length=100)
    average_response_time = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    

    def __str__(self):
        return self.id

class Comment(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    contact = models.ForeignKey(Contact, related_name='comments', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    content = models.CharField(max_length=500)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.id