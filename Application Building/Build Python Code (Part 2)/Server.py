import os
import cv2
import numpy as np
import pandas as pd
from PIL import Image
import tensorflow as tf
from keras.models import load_model
from keras.preprocessing import image
from flask import Flask, render_template, request, jsonify
from keras.utils import load_img
from keras.utils import img_to_array

app = Flask(__name__)

def get_model():
    global model
    model = load_model(r'D:/Code/IBM/Sprint-3/server/Models/model.h5')
    print("Model loaded!")

def load_image(img_path):

    img = load_img(img_path)
    img_tensor = img_to_array(img) 
    img_tensor = cv2.cvtColor(img_tensor, cv2.COLOR_BGR2GRAY)
    img_tensor = cv2.resize(img_tensor, (28,28))
    _, img_tensor = cv2.threshold(img_tensor, 50, 255, cv2.THRESH_BINARY)
    img_tensor = 255-img_tensor
    kernel = np.ones((3, 3), np.uint8)
    img_tensor = cv2.dilate(img_tensor, kernel, iterations=1)
    cv2.imwrite("img.jpg",img_tensor)
    img_tensor = np.expand_dims(img_tensor, axis=0)         
    img_tensor /= 255.

    return img_tensor

def prediction(img_path):
    new_image = load_image(img_path)
    
    pred = model.predict(new_image)
    return np.argmax(pred[0])

get_model()

@app.route("/predict", methods = ['GET','POST'])
def predict():
    if request.method == 'POST':
        file = request.files['file']
        filename = file.filename
        file_path = os.path.join(r'D:/Code/IBM/Sprint-3/server/Temp/', filename) 
        file.save(file_path)
        pred = prediction(file_path)
        pred = int(pred)
        response = jsonify({
        'number': pred
        })
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    if request.method == 'GET':
        response = jsonify({
            'number':1
        })
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response


if __name__ == "__main__":
    app.run()