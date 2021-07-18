from typing import List
from Repositories.DBConfig.db_map import Answers
from db import db



def all_answers():
    results = db.session.query(Answers).all()
    return results

def get_answer_by_id(q_id):
    result = db.session.query(Answers).filter_by(question_id=q_id).all()
    return result

def get_answer_value_by_answer_id(a_id):
    result = db.session.query(Answers).filter_by(answer_id=a_id).all()
    return result

