from django.urls import path

from .models import TestCase
from .views import *

app_name = 'api'

urlpatterns = [
    path('test/', TestCase.as_view(), name='test'),
]