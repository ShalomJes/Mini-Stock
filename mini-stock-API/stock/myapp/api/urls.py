from django.urls import path
from .views import StoreListCreateView

urlpatterns = [
    path('store/', StoreListCreateView.as_view(), name='store-list-create'),
]
