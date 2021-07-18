

from Repositories.DBConfig.db_map import Results
from db import db
import uuid
from sqlalchemy.sql import func



def insert_result_id():
    new_id = Results(result_id=str(uuid.uuid1()))
    db.session.add(new_id)
    db.session.commit()
    return new_id.result_id



def update_average(average, r_id, version):
    result = db.session.query(Results).filter_by(result_id=r_id).first()

    result.average = average
    result.version = version
    db.session.commit()

def get_average_by_version(version):
    result=db.session.query(func.avg(Results.average).label('version_average')).filter(
        Results.version == version).first()
    result=float(result['version_average'])
    return result

def get_results():
    results = db.session.query(Results).all()
    return results
