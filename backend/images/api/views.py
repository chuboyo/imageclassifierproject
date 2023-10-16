from .serializers import ImageSerializer
from ..models import Image
from rest_framework import viewsets

class ImageViewSet(viewsets.ModelViewSet):
    '''Imageviewset inherits from viewsets.ModelViewSet and creates CRUD viewset using Image model and Image
    serializer class'''
    queryset = Image.objects.all().order_by('-uploaded')
    serializer_class = ImageSerializer