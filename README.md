# imageclassifier
An Image classification application that takes images and classifies them using InceptionResNet SOTA model. The model is served via a Django API and clients can interact with a React frontend to send images to the API for inference.

To Start Django Server:
1. cd /imageclassifier_back
2. pip install -r requirements.txt
3. python manage.py runserver


To Start React Frontend:
1. cd /imageclassifier-front
2. npm install
3. npm start
