# imageclassifier
An Image classification application that takes images and classifies them using InceptionResNet SOTA model. The model is served via a Django API and clients can interact with a React frontend to send images to the API for inference.

To Start Django Server:
1. cd /backemd
2. create virtual env - python3 -m venv my_env
3. activate virtual env - source my_env/bin/activate
4. install requiremnets - pip install -r requirements.txt
5. start local server - python manage.py runserver


To Start React Frontend:
1. Open another terminal instance and cd /frontend
2. install dependencies - npm install
3. start local server - npm start
4. visit http://localhost:3000/
