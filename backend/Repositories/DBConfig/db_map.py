from flask_sqlalchemy import SQLAlchemy
from db import *


# answer = db.Table('answers', db.metadata, autoload=True,
# autoload_with=db.engine)
Answers = Base.classes.answers
Questions = Base.classes.questions
Results = Base.classes.results
ResultAnswers = Base.classes.result_answers

