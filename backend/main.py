import sys
sys.path.insert(0,r"C:\Users\Jonathan\Documents\My_Workspaces\Love and Pain Scale Full Stack App\backend\venv\Lib\site-packages")
from flask import jsonify, request
from Providers import answers_provider
from app import app
import Providers.result_provider as result_provider
from Providers import questions_provider
from Providers import questionnaire_provider
from Providers import pain_provider
from db import db


@app.route('/results', methods=['POST'])
def post_results():
    """
    Get json data from the user's request.
    Give the json to the provider to do all the result posting work.
    The provider will send back up a piece of response data describing the
    work that was done.
    """
    
    results_posted = result_provider.post_results(request.json)
    message = {"message": "Success" if results_posted else "Failure"}
    response = jsonify(message)
    return response


@app.route('/answers', methods=['GET'])
def get_all_answers():
    return answers_provider.get_all_answers()

@app.route('/questions', methods=['GET'])
def get_all_questions():
    return questions_provider.get_all_questions()

@app.route('/questionnaire', methods=['GET'])
def get_questionnaire():
    return questionnaire_provider.get_questionnaire()

@app.route('/pain', methods=['GET'])
def get_pain():
    return pain_provider.get_pain()

@app.route('/get_results', methods=['GET'])
def get_results():
    return result_provider.get_results_for_graph()


if __name__ == "__main__":
    app.run()
    













