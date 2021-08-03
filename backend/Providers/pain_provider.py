from Repositories import questions_repository
from Repositories.answers_repository import *
import jsonpickle
from Shared.Models.ResponseModels.question import Question
from Shared.Models.ResponseModels.answer import Answer
from Shared.Models.ResponseModels.questionnaire import QuestionnaireSection
from cache import pain_cache

def get_pain():
    if len(pain_cache) > 0:
        return pain_cache.send()
    pain = []
    
    all_questions = questions_repository.all_questions()
    for i in range(15, len(all_questions)):

        questionnaire_section = QuestionnaireSection()
        questionnaire_section.answers = []
        question = Question()
        question.question_id = all_questions[i].question_id
        question.question_text = all_questions[i].question_text

        for a in get_answer_by_id(all_questions[i].question_id):
            answer = Answer()
            answer.answer_id = a.answer_id
            answer.answer_text = a.answer_text

            questionnaire_section.answers.append(answer)
        questionnaire_section.question = question
        pain.append(questionnaire_section)
    pain_cache.memo = pain   
    return jsonpickle.encode(pain, unpicklable=False)