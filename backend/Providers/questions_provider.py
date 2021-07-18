import json

import jsonpickle
from flask import jsonify
import jsons
from Shared.Models.ResponseModels.question import Question
from Repositories import questions_repository


def get_all_questions():
    questions = []
    all_questions = questions_repository.all_questions()
    for q in all_questions:
        question = Question()
        question.question_id = q.question_id
        question.question_text = q.question_text
        questions.append(question)
    return jsonpickle.encode(questions, unpicklable=False)
