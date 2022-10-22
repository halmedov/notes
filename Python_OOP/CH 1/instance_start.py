# Python Object Oriented Programming by Joe Marini course example
# Basic class definitions


# TODO : create a basic class
class Book:
    # the "init" function is called when the instance is
    # created and ready to be initialized
    def __init__(self, title, author, pages, price):
        self.title = title
        # TODO : add properties
        self.author = author
        self.pages = pages
        self.price = price
        self.__secret = "This is a secret attribute"

    # TODO : create instance methods
    def getprice(self):
        if hasattr(self, "_discount"):
            return self.price - (self.price * self._discount)
        else:
            return self.price

    def setdiscount(self, amount):
        self._discount = amount


# TODO : create some book instances
b1 = Book('War and Peace', "Leo Tolstoy", 1225, 39.95)
b2 = Book('Pride and Prejudice', 'Jane Austin', 276, 19.95)
b3 = Book('The Catcher in the Rye', 'JD Salinger', 234, 29.95)

# TODO : print the price of books
print(b1.getprice())
print(b2.getprice())
print(b3.getprice())

# TODO : try setting the discount

print(b2.getprice())
b2.setdiscount(0.25)
print(round(b2.getprice(), 4))

# TODO : properties with double underscores are hidden by the interpreter
# print(b2.__secret)    # we can't access like that
print(b2._Book__secret)  # we can access like that
