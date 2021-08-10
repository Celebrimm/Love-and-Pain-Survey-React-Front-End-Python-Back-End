from Repositories import result_answer_repository
from Repositories import result_repository
from Repositories import answers_repository
from Repositories import questions_repository
from Shared.Models.ResponseModels.graphresults import GraphResults
import jsonpickle


def post_results(json):
    answer_ids = json['answer_ids']

    version = ''

    average = 0
    answers_with_values = 0
    result_id = result_repository.insert_result_id()
    for question_id, answer_id in answer_ids.items():
        if not version:
            for v in questions_repository.get_version_by_question_id(
                    question_id):
                version = v.version

        result_answer_repository.insert_result_answers(result_id, answer_id)
        for a in answers_repository.get_answer_value_by_answer_id(answer_id):
            if a.value != 0:
                answers_with_values += 1
                average += a.value
    average /= answers_with_values

    result_repository.update_average(average, result_id, version)
    return True


def get_results_for_graph():
    all_results = result_repository.get_results()
    graph_results = []
    pain_graph_results = GraphResults()
    pain_graph_results.version = "Pain"
    love_and_pain_graph_results = GraphResults()
    love_and_pain_graph_results.version = "Love"

    pain_graph_results.average = result_repository.get_average_by_version(
        pain_graph_results.version)

    love_and_pain_graph_results.average = \
        result_repository.get_average_by_version(
            love_and_pain_graph_results.version)

    graph_results.append(pain_graph_results)
    graph_results.append(love_and_pain_graph_results)
    return jsonpickle.encode(graph_results, unpicklable=False)
