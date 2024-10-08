from django.contrib import admin
from django.urls import path, include
from contactBookApi import urls as contactUrls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('contacts/', include(contactUrls)),
]
