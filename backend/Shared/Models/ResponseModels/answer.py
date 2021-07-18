class Answer:
    answer_id = None
    answer_text = None

    def __repr__(self):
        return f"{self.answer_id}: {self.answer_text}"
