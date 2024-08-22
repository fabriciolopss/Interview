from django.urls import path
from . import views

urlpatterns = [
    path('', views.ContactListView.as_view(), name='message-list'),
    path('create/', views.ContactCreateView.as_view(), name='message-create'),
    path('comments/create/', views.CommentCreateView.as_view(), name='comment-create'),
    path('<uuid:contact_id>/comments/', views.ContactCommentsListView.as_view(), name='comment-list'),
    path('<uuid:contact_id>/comments/create/', views.CommentCreateView.as_view(), name='comment-create'),
]