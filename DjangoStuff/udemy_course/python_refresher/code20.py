from typing import List

class Student:
    def __init__(self, name: str, grades: List[int] = []): # this is bad!!!
        self.name = name
        self.grades = grades

    def take_exam(self, result):
        self.grades.append(result)


bob = Student("Bob")
rolf = Student("Rolf")
bob.take_exam(90)
print(bob.grades)
print(rolf.grades)

# THIS IS WHY WHAT YOU DID ABOVE IS BAD

# NEVER EVER EVER SET A PARAMETER TO A DEFAULT MUTABLE VALUE IN PYTHON OR THIS WILL HAPPEN

# the reason this happens is that the value [] gets setup in memory when the function is created,
# not when the function is called. It will use this value in memory anytime the function is called.