from ..models import Image
from rest_framework import serializers

class ImageSerializer(serializers.ModelSerializer):
    '''Image serializer to serializer Image model fields into JSON format. Inherits from serializers.Model
    Serializers'''

    class Meta:
        model = Image
        fields = '__all__'

