from typing import Iterable, Optional
from django.db import models
import tensorflow as tf
from tensorflow.keras.utils import load_img, img_to_array
from tensorflow.keras.applications.inception_resnet_v2 import InceptionResNetV2, decode_predictions, preprocess_input
import numpy as np

# Create your models here.
def load(img):
    loaded = load_img(img, target_size=(299, 299))
    return loaded

class Image(models.Model):
    '''Image model to store images, labels and date of upload. Inherits from models.Model and has three
    fields for - image, image label and date'''

    picture = models.ImageField()
    classified = models.CharField(max_length=200, blank=True)
    uploaded = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"image classified at {self.uploaded}"

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        try:
            img = load_img(self.picture.path, target_size=(299, 299))
            img_array = img_to_array(img)
            
            to_pred = np.expand_dims(img_array, axis=0)
            prep = preprocess_input(to_pred)
            model = InceptionResNetV2(weights='imagenet')
            prediction = model.predict(prep)
            decoded = decode_predictions(prediction)[0][0][1]
            self.classified = str(decoded)
            Image.objects.filter(pk=self.id).update(classified=self.classified)
            # print(decoded)
            print('success')
        except Exception as e:
            print(f"Classification failed: {e}")

