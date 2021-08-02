import jsonpickle
class Cache:
    

    def __init__(self):
        self.memo=[]
    
    def size(self):
        return len(self.memo)
    def send(self):
        return jsonpickle.encode(self.memo, unpicklable=False)
questionnaire_cache = Cache()
pain_cache = Cache()