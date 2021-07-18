class Question:
    question_id = None
    question_text = None
    def __repr__(self):
        return f"{self.question_id}: {self.question_text}"
