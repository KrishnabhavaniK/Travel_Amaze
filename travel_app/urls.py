from django.urls import path
from . import views
from .views import service, destination_detail
from .views import save_destination

urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('service/', service, name='service'),
    path('destination/<slug:slug>/', destination_detail, name='destination_detail'),
    path('contact/', views.contact, name='contact'),
    path("save-destination/", save_destination, name="save_destination"),
    path("profile/", views.profile, name="profile"),
    path('delete-destination/', views.delete_destination, name='delete_destination'),
]
