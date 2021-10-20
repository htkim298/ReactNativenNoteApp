from django.shortcuts import render
# from django.views import generic
from rest_framework import generics

from .serializers import *
from .models import *
from django.views.generic import View
from rest_framework.permissions import AllowAny
# Create your views here.


class TestCase(generics.ListAPIView):
    queryset = TestCase.objects.all()
    serializer_class = TestSerializer
    permission_classes = [AllowAny]