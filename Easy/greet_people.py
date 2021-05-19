# https://edabit.com/challenge/SKorutJdWGBzXJDRt
'''
In this exercise you will have to:

Take a list of names.
Add "Hello" to every name.
Make one big string with all greetings.
The solution should be one string with a comma in between every "Hello (Name)".

'''
def greet_people(names):
    return " ".join(["Hello "+name+"," for name in names])[:-1]

def greet_people(names):
    return ", ".join("Hello "+ i for i in names)

print(greet_people(["Kyrill"]),  "Hello Kyrill")
print(greet_people(["Kyrill", "Mom", "Dad", "Zuzu"]), "Hello Kyrill, Hello Mom, Hello Dad, Hello Zuzu")
print(greet_people([]), "")
