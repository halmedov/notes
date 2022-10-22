# Python Object Oriented Programming by Joe Marini course example
# Using the __str__ and __repr__ magic methods


class Book:

    def __init__(self, title, author, price):
        super().__init__()
        self.title = title
        self.author = author
        self.price = price

    # TODO : the __eq__ method checks for equality between two objects
    def __eq__(self, obj: object) -> bool:
        if not isinstance(obj, Book):
            raise ValueError("Can't compare book to non-book")

        return (self.title == obj.title) and (self.author
                                              == obj.author) and (self.price
                                                                  == obj.price)

    # TODO : the __ge__ establishes >= relationship with another obj
    def __ge__(self, obj):
        if not isinstance(obj, Book):
            raise ValueError("Can't compare book to non-book")
        return self.price >= obj.price

    # TODO : the __lt__establishes < relationship with another obj
    def __lt__(self, obj):
        if not isinstance(obj, Book):
            raise ValueError("Can't compare book to non-book")
        return self.price < obj.price


b1 = Book("War and Peace", "Leo Tolstoy", 39.95)
b2 = Book("The Catcher in the Rye", "JD Salinger", 29.95)
b3 = Book("War and Peace", "Leo Tolstoy", 39.95)
b4 = Book("The Catcher in the Rye", "JD Salinger", 29.95)

# TODO : Check for equality
# print(b1 == b3)  # True
# print(b1 == b2)  # False
# print(b1 == 42)  # ValueError occurs
# TODO : Check for greater and lesser value
print(b2 >= b1)
print(b2 < b1)

# TODO : Now we can sort them too
books = [b1, b2, b3, b4]
books.sort()
print([book.title for book in books])