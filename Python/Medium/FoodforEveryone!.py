# https://edabit.com/challenge/iRvRtg2xxL9BnSEvf
class Person:
    def __init__(self,name,loves,hates):
        self.name=name
        self.loves=loves
        self.hates=hates

    def taste(self,food):
        if food in self.loves:
            c=self.loves[self.loves.index(food)]
            return "{} eats the {} and loves it!".format(self.name,c)
        elif food in self.hates:
            c=self.hates[self.hates.index(food)]
            return "{} eats the {} and hates it!".format(self.name,c)
        return "{} eats the {}!".format(self.name,food)


p1 = Person("Sam", ["ice cream", "pie", "apples"], ["carrots", "bananas", "cheese", "lettuce"])
print(p1.taste("ice cream"), "Sam eats the ice cream and loves it!")
print(p1.taste("carrots"), "Sam eats the carrots and hates it!")
