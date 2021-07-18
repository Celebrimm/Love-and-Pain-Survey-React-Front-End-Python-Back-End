
import sys
sys.path.insert(0,r"C:\Users\Jonathan\Documents\My_Workspaces\Love and Pain Scale Full Stack App\backend\venv\Lib\site-packages")
from sqlalchemy import create_engine
from sqlalchemy.orm.properties import ColumnProperty, RelationshipProperty
from app import app
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
import flask_sqlalchemy

# MySQL configurations
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:Airsoft9124!@localhost/pain_scale'

db = SQLAlchemy(app)
Base = automap_base()
Base.prepare(db.engine, reflect=True)
session = Session(db.engine)


