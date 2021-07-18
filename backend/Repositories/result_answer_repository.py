from Repositories.DBConfig.db_map import ResultAnswers

from db import *
from sqlalchemy.orm import Session

def insert_result_answers(r_id, a_id):
    new_result = ResultAnswers(result_id=r_id, answer_id=a_id)
    db.session.add(new_result)
    db.session.commit()

