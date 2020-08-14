
from django.urls import path
from django.conf.urls import url
from customers import views

urlpatterns = [
    url(r'^customers/$', views.customer_list),
    path('customers/<int:pk>', views.customer_detail, name='customers'),
    url(r'^customers/(?P<pk>[0-9]+)$', views.customer_detail),
    url(r'^customers/age/(?P<age>[0-9]+)/$', views.customer_list_age),
]

