class GraphResults:
    def __init__(self):
        self.version = None

        self.average = 0
 

    def __repr__(self):
        return f"{self.version}: {self.average}"