# Lets create some Student class

from operator import sub


class Info:

    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name

    def get_fullname(self):
        return self.first_name + ' ' + self.last_name


class Student(Info):

    def __init__(self, first_name, last_name, student_number):
        super().__init__(first_name, last_name)
        if len(str(student_number)) != 8:
            raise ValueError("The student number must be 8 digits")
        else:
            self.student_number = student_number
        self._courses = []
        self._course_results = {}

    # TODO : set student number
    def set_student_number(self, new_student_number):
        self.student_number = new_student_number

    def getinfo(self):
        return "Name       : {} \nSurname    : {} \nStudent No : {}\nCourses    : ".format(
            self.first_name, self.last_name, self.student_number) + str(
                self._courses)

    # TODO : Lets add  add courses method
    def add_courses(self, course):
        self.course = course
        self._courses.append(self.course)

    # TODO : Lets add get courses method
    def get_courses(self):
        return self._courses

    def add_exam_result(self, course_name, result):
        if course_name in self._courses:
            self._course_results[course_name] = result
        else:
            self._courses.append(course_name)
            self._course_results[course_name] = result

    def get_exam_results(self, subject):
        if subject in self._course_results.values():
            return self._course_results[subject]
        else:
            raise ValueError(f"There is no an info about {subject}")


# TODO : Lets create Teacher class


class Teacher(Info):

    def __init__(self, first_name, last_name, profession):
        super().__init__(first_name, last_name)
        self.profession = profession

    def get_profession(self):
        return self.profession + ' teacher'


# TODO : Lets create some student info
s1 = Student('Bazarbay', 'Halmedov', 12345678)

# TODO : Lets print s1
print(s1.get_fullname())

# TODO : Lets add some courses to s1
s1.add_courses('Math')
s1.add_courses('Physics')
s1.add_exam_result('English', 92)
# TODO : Lets print the courses
print(s1.get_courses())

print(s1.getinfo())

# TODO : Lets add instances to the Teacher class

t1 = Teacher('Nicola', 'Tesla', 'Electromagnetics')

print(t1.get_fullname())
print(t1.get_profession())
print('------------------------------')
print(s1.get_exam_results('English'))
print(s1.get_exam_results('Math'))
