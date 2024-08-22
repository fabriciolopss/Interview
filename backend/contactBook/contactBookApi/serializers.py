from rest_framework import serializers
from .models import Contact, Comment

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'name', 'content', 'date']

class ContactBookSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)  

    class Meta:
        model = Contact
        fields = ["name", "created_at", "cellphone_number", "description", "job", "birth_date", "profile_photo", "comments", "id", "email", "average_response_time"]
