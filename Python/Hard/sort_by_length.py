# https://edabit.com/challenge/yTcByt5gEnzF5av9X

def sort_by_length(txt):
    txt=txt.split()
    return ' '.join(sorted(txt,key=lambda i:(len(i),i.lower())))


print(sort_by_length("Hello my friend"), "my Hello friend")
print(sort_by_length("Three can keep a secret, if two of them are dead"), "a if of are can two dead keep them Three secret,")
print(sort_by_length("To be or not to be, that is the question."), "be is or To to be, not the that question.")
print(sort_by_length("I have a dream"), "a I have dream")
print(sort_by_length("This is the end"), "is end the This")