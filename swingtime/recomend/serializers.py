from rest_framework import serializers
from recomend.models import Recomend


class RecomendSerializer(serializers.ModelSerializer):

    class Meta:
        model = Recomend
        fields = (  'age',
    				'distance',
    				'level',
    				'swin',
    				'weight',
    				'first_name',
    				'last_name',
    				'swin_time',
    				'gender_m',
    				'stroke_code_bk',
    				'stroke_code_br',
    				'stroke_code_fl',
    				'stroke_code_fr',
    				'stroke_code_im' )