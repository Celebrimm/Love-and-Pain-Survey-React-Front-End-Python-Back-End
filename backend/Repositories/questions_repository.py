from Repositories.DBConfig.db_map import *
from db import db


def all_questions():
    results = db.session.query(Questions).all()
    return results


def get_version_by_question_id(q_id):
    result = db.session.query(Questions).filter_by(question_id=q_id).all()
    return result
