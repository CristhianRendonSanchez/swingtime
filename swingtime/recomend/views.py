from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework import status

import numpy as np
import pandas as pd

from recomend.models import Recomend
from recomend.serializers import RecomendSerializer



def data_list(request):
    if request.method == 'GET':
        recomend = Recomend.objects.all()
        recomend_serializer = RecomendSerializer(recomend, many=True)

        return JsonResponse(recomend_serializer.data, safe=False)


        # In order to serialize objects, we must set 'safe=False'

    elif request.method == 'POST':
        recomend_data = JSONParser().parse(request)
        recomend_serializer = RecomendSerializer(data=recomend_data)
        if recomend_serializer.is_valid():
            recomend_serializer.save()
            return JsonResponse(recomend_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(recomend_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        Recomend.objects.all().delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)

########################################################################################################################################################

def recomend_svm_distance(request,age,level,swin,weight,gender_m,stroke_code_bk,stroke_code_br,stroke_code_fl,stroke_code_fr,stroke_code_im):
	
	#read bd for search data
	recomend = Recomend.objects.all()
	recomend_serializer = RecomendSerializer(recomend, many=True)
	data = recomend_serializer.data
	dataset = pd.json_normalize(data)
	#test only for console
	print(dataset.info())

	#split data
	X = dataset.iloc[:, [0,2,3,4,8,9,10,11,12,13]].values
	y = dataset.iloc[:, 1].values

	# Splitting the dataset into the Training set and Test set
	from sklearn.model_selection import train_test_split
	X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.25, random_state = 0)

	# Feature Scaling
	from sklearn.preprocessing import StandardScaler

	sc = StandardScaler()
	X_train = sc.fit_transform(X_train)
	X_test = sc.transform(X_test)

	# Fitting classifier to the Training set
	from sklearn import svm

	
	classifier = svm.SVC(kernel='rbf', gamma=0.7, C=1.0)

	classifier.fit(X_train, y_train)
	pred=sc.transform([[age,level,swin,weight,gender_m,stroke_code_bk,stroke_code_br,stroke_code_fl,stroke_code_fr,stroke_code_im]])
	y_pred = classifier.predict(pred)
	print(y_pred)
	return JsonResponse({'distance':int(y_pred[0])})

########################################################################################################################################################


def recomend_svm_time(request,age,distance,level,weight,gender_m,stroke_code_bk,stroke_code_br,stroke_code_fl,stroke_code_fr,stroke_code_im):

	#read bd for search data
	recomend = Recomend.objects.all()
	recomend_serializer = RecomendSerializer(recomend, many=True)
	data = recomend_serializer.data
	dataset = pd.json_normalize(data)
	#test only for console
	print(dataset.info())

	#split data
	X = dataset.iloc[:, [0,1,2,4,8,9,10,11,12,13]].values
	y = dataset.iloc[:, 3].values

	# Splitting the dataset into the Training set and Test set
	from sklearn.model_selection import train_test_split
	X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.25, random_state = 0)

	# Feature Scaling
	from sklearn.preprocessing import StandardScaler

	sc = StandardScaler()
	X_train = sc.fit_transform(X_train)
	X_test = sc.transform(X_test)

	# Fitting classifier to the Training set
	from sklearn import svm

	classifier = svm.SVC(kernel='rbf', gamma=0.7, C=1.0)
	
	classifier.fit(X_train, y_train)
	pred=sc.transform([[age,distance,level,weight,gender_m,stroke_code_bk,stroke_code_br,stroke_code_fl,stroke_code_fr,stroke_code_im]])
	y_pred = classifier.predict(pred)
	print(y_pred)
	return JsonResponse({'time':int(y_pred[0])})

########################################################################################################################################################

def recomend_ramdon_forest_time(request,age,distance,level,weight,gender_m,stroke_code_bk,stroke_code_br,stroke_code_fl,stroke_code_fr,stroke_code_im):

	#read bd for search data
	recomend = Recomend.objects.all()
	recomend_serializer = RecomendSerializer(recomend, many=True)
	data = recomend_serializer.data
	dataset = pd.json_normalize(data)
	#test only for console
	print(dataset.info())

	#split data
	X = dataset.iloc[:, [0,1,2,4,8,9,10,11,12,13]].values
	y = dataset.iloc[:, 3].values

	# Splitting the dataset into the Training set and Test set
	from sklearn.model_selection import train_test_split
	X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.25, random_state = 0)

	# Feature Scaling
	from sklearn.preprocessing import StandardScaler

	sc = StandardScaler()
	X_train = sc.fit_transform(X_train)
	X_test = sc.transform(X_test)

	# Fitting classifier to the Training set
	from sklearn.ensemble import RandomForestClassifier
	
	classifier = RandomForestClassifier(n_estimators=100)
	
	classifier.fit(X_train, y_train)
	pred=sc.transform([[age,distance,level,weight,gender_m,stroke_code_bk,stroke_code_br,stroke_code_fl,stroke_code_fr,stroke_code_im]])
	y_pred = classifier.predict(pred)
	print(y_pred)
	return JsonResponse({'time':int(y_pred[0])})

########################################################################################################################################################

def recomend_ramdon_forest_distance(request,age,distance,level,weight,gender_m,stroke_code_bk,stroke_code_br,stroke_code_fl,stroke_code_fr,stroke_code_im):

	#read bd for search data
	recomend = Recomend.objects.all()
	recomend_serializer = RecomendSerializer(recomend, many=True)
	data = recomend_serializer.data
	dataset = pd.json_normalize(data)
	#test only for console
	print(dataset.info())

	#split data
	X = dataset.iloc[:, [0,2,3,4,8,9,10,11,12,13]].values
	y = dataset.iloc[:, 1].values

	# Splitting the dataset into the Training set and Test set
	from sklearn.model_selection import train_test_split
	X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.25, random_state = 0)

	# Feature Scaling
	from sklearn.preprocessing import StandardScaler

	sc = StandardScaler()
	X_train = sc.fit_transform(X_train)
	X_test = sc.transform(X_test)

	# Fitting classifier to the Training set
	from sklearn.ensemble import RandomForestClassifier
	
	classifier = RandomForestClassifier(n_estimators=100)
	
	classifier.fit(X_train, y_train)
	pred=sc.transform([[age,distance,level,weight,gender_m,stroke_code_bk,stroke_code_br,stroke_code_fl,stroke_code_fr,stroke_code_im]])
	y_pred = classifier.predict(pred)
	print(y_pred)
	return JsonResponse({'time':int(y_pred[0])})

########################################################################################################################################################

def recomend_KNN_time(request,age,distance,level,weight,gender_m,stroke_code_bk,stroke_code_br,stroke_code_fl,stroke_code_fr,stroke_code_im):

	#read bd for search data
	recomend = Recomend.objects.all()
	recomend_serializer = RecomendSerializer(recomend, many=True)
	data = recomend_serializer.data
	dataset = pd.json_normalize(data)
	#test only for console
	print(dataset.info())

	#split data
	X = dataset.iloc[:, [0,1,2,4,8,9,10,11,12,13]].values
	y = dataset.iloc[:, 3].values

	# Splitting the dataset into the Training set and Test set
	from sklearn.model_selection import train_test_split
	X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.25, random_state = 0)

	# Feature Scaling
	from sklearn.preprocessing import StandardScaler

	sc = StandardScaler()
	X_train = sc.fit_transform(X_train)
	X_test = sc.transform(X_test)

	# Fitting classifier to the Training set
	from sklearn.neighbors import KNeighborsClassifier
	
	classifier = KNeighborsClassifier(n_neighbors = 5)
	
	classifier.fit(X_train, y_train)
	pred=sc.transform([[age,distance,level,weight,gender_m,stroke_code_bk,stroke_code_br,stroke_code_fl,stroke_code_fr,stroke_code_im]])
	y_pred = classifier.predict(pred)
	print(y_pred)
	return JsonResponse({'time':int(y_pred[0])})

########################################################################################################################################################

def recomend_KNN_distance(request,age,distance,level,weight,gender_m,stroke_code_bk,stroke_code_br,stroke_code_fl,stroke_code_fr,stroke_code_im):

	#read bd for search data
	recomend = Recomend.objects.all()
	recomend_serializer = RecomendSerializer(recomend, many=True)
	data = recomend_serializer.data
	dataset = pd.json_normalize(data)
	#test only for console
	print(dataset.info())

	#split data
	X = dataset.iloc[:, [0,2,3,4,8,9,10,11,12,13]].values
	y = dataset.iloc[:, 1].values

	# Splitting the dataset into the Training set and Test set
	from sklearn.model_selection import train_test_split
	X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.25, random_state = 0)

	# Feature Scaling
	from sklearn.preprocessing import StandardScaler

	sc = StandardScaler()
	X_train = sc.fit_transform(X_train)
	X_test = sc.transform(X_test)

	# Fitting classifier to the Training set
	from sklearn.neighbors import KNeighborsClassifier
	
	classifier = KNeighborsClassifier(n_neighbors = 5)
	
	classifier.fit(X_train, y_train)
	pred=sc.transform([[age,distance,level,weight,gender_m,stroke_code_bk,stroke_code_br,stroke_code_fl,stroke_code_fr,stroke_code_im]])
	y_pred = classifier.predict(pred)
	print(y_pred)
	return JsonResponse({'time':int(y_pred[0])})