from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
#Initializing flask framework in a app variable.
app = Flask(__name__)
CORS(app)