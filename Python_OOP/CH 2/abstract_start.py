# Python Object Oriented Programming by joe Marini course example
# Using Abstract Base Classes to enforce class constraints

from abc import ABC, abstractmethod


class GraphicShape(ABC):

    def __init__(self):
        super().__init__()

    def calcArea(self):
        pass


class Circle(GraphicShape):

    def __init__(self, radius):
        self.radius = radius

    def calcArea(self):
        return 3.14 * (self.radius**2)


class Square(GraphicShape):

    def __init__(self, side):
        self.side = side

    def calcArea(self):
        return self.side**2


c = Circle(10)
s = Square(12)
print(c.calcArea())
print(s.calcArea())