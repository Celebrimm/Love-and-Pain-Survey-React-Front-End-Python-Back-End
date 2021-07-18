import json

import jsonpickle
from flask import jsonify
import jsons
from Shared.Models.ResponseModels.answer import Answer

from Repositories import answers_repository


def get_all_answers():
    answers = []
    all_answers = answers_repository.all_answers()
    for a in all_answers:
        answer = Answer()
        answer.answer_id = a.answer_id
        answer.answer_text = a.answer_text
        answers.append(answer)
    return jsonpickle.encode(answers, unpicklable=False)


