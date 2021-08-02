from flask import jsonify
import sys
from cache import questionnaire_cache
from Repositories import questions_repository
from Repositories.answers_repository import *
import jsonpickle
from Shared.Models.ResponseModels.question import Question
from Shared.Models.ResponseModels.answer import Answer
from Shared.Models.ResponseModels.questionnaire import QuestionnaireSection


def get_questionnaire():
    questionnaire = []

    all_questions = questions_repository.all_questions()
    for q in all_questions:

        questionnaire_section = QuestionnaireSection()
        questionnaire_section.answers = []
        question = Question()
        question.question_id = q.question_id
        question.question_text = q.question_text

        for a in get_answer_by_id(q.question_id):
            answer = Answer()
            answer.answer_id = a.answer_id
            answer.answer_text = a.answer_text

            questionnaire_section.answers.append(answer)
        questionnaire_section.question = question
        questionnaire.append(questionnaire_section)
        

    questionnaire_cache.memo = questionnaire

    return jsonpickle.encode(questionnaire, unpicklable=False)

