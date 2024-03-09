from rest_framework import generics
from .serializers import StoreSerializer
from ..models import store

class StoreListCreateView(generics.ListCreateAPIView):
    queryset = store.objects.all()
    serializer_class = StoreSerializer
