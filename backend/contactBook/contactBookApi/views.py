from django.shortcuts import get_object_or_404
from rest_framework import generics
from .models import Contact, Comment
from .serializers import ContactBookSerializer, CommentSerializer
from rest_framework.response import Response
from rest_framework import status

class ContactCreateView(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactBookSerializer
    http_method_names = ['post']

class ContactListView(generics.ListAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactBookSerializer
    http_method_names = ['get']


class CommentCreateView(generics.CreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def perform_create(self, serializer):
        contact_id = self.kwargs.get('contact_id') 
        contact = get_object_or_404(Contact, id=contact_id)  
        serializer.save(contact=contact)  

class ContactCommentsListView(generics.ListAPIView):
    serializer_class = CommentSerializer

    def get_queryset(self):
        contact_id = self.kwargs['contact_id']
        return Comment.objects.filter(contact__id=contact_id)

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        if not queryset.exists():
            return Response({"detail": "No comments found for this contact."}, status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)