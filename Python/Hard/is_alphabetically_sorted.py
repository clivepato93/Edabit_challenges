# https://edabit.com/challenge/xmyNqzxAgpE47zXEt

def is_alphabetically_sorted(sentence):
    sentence=sentence.replace('.',"").split()
    for word in sentence:
        if ''.join(sorted(word))==word and len(word)>2:
            return True
    return False


print(is_alphabetically_sorted("Paula has a French accent."), True)
print(is_alphabetically_sorted("The biopsy returned negative results."), True)
print(is_alphabetically_sorted("She sells sea shells by the sea shore."), False)
print(is_alphabetically_sorted("She almost reached the top of Mt. Everest."), True)
print(is_alphabetically_sorted("She was happy with how her earring hoops looked."), True)
print(is_alphabetically_sorted("Beth dislikes eating starfruit but enjoys cherries."), False)
print(is_alphabetically_sorted("Elinor is inside on a rainy day sipping hot chocolate."), True)
print(is_alphabetically_sorted("Mara took a photograph."), False)
