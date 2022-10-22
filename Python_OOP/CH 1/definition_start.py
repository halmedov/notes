# Python Object Oriented Programming by Joe Marini course example
# Basic class definitions


# TODO : create a basic class
class Book:

    def __init__(self, title):
        self.title = title


# TODO : create instances of the class
b1 = Book('Brave New World')
b2 = Book('War and Peace')
b3 = Book('Pride and Prejudice')

# TODO : print the class and property
print(b1)
print(b1.title)
print(b2)
print(b2.title)
print(b3)
print(b3.title)