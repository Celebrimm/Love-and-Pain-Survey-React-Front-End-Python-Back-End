from Shared.Models.ResponseModels import *
class QuestionnaireSection():
    def __init__(self):
        self.question = None
        self.answers = []

    def __repr__(self):
        return f"{self.question}: {self.answers}"



