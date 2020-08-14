from django.urls import path
from django.conf.urls import url
from recomend import views

urlpatterns = [
	path('',views.data_list),
	
	path('distanceSVM/<int:age>/<int:level>/<int:swin>/<int:weight>/<int:gender_m>/<int:stroke_code_bk>/<int:stroke_code_br>/<int:stroke_code_fl>/<int:stroke_code_fr>/<int:stroke_code_im>', views.recomend_svm_distance),
	path('timeSVM/<int:age>/<int:distance>/<int:level>/<int:weight>/<int:gender_m>/<int:stroke_code_bk>/<int:stroke_code_br>/<int:stroke_code_fl>/<int:stroke_code_fr>/<int:stroke_code_im>', views.recomend_svm_time),

	path('distanceRF/<int:age>/<int:level>/<int:swin>/<int:weight>/<int:gender_m>/<int:stroke_code_bk>/<int:stroke_code_br>/<int:stroke_code_fl>/<int:stroke_code_fr>/<int:stroke_code_im>', views.recomend_ramdon_forest_distance),
	path('timeRF/<int:age>/<int:distance>/<int:level>/<int:weight>/<int:gender_m>/<int:stroke_code_bk>/<int:stroke_code_br>/<int:stroke_code_fl>/<int:stroke_code_fr>/<int:stroke_code_im>', views.recomend_ramdon_forest_time),

	path('distanceKNN/<int:age>/<int:level>/<int:swin>/<int:weight>/<int:gender_m>/<int:stroke_code_bk>/<int:stroke_code_br>/<int:stroke_code_fl>/<int:stroke_code_fr>/<int:stroke_code_im>', views.recomend_KNN_distance),
	path('timeKNN/<int:age>/<int:distance>/<int:level>/<int:weight>/<int:gender_m>/<int:stroke_code_bk>/<int:stroke_code_br>/<int:stroke_code_fl>/<int:stroke_code_fr>/<int:stroke_code_im>', views.recomend_KNN_time),


]