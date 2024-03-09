from rest_framework import serializers
from ..models import store

class StoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = store
        fields = '__all__'
