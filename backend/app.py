from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
#Initializing flask framework in a app variable.
app = Flask(__name__, static_folder='./build', static_url_path='/')
#comment this on deployment
# CORS(app)