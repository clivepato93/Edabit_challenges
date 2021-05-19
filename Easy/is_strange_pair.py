# https://edabit.com/challenge/HWxNGdeoPxzievGa3
def is_strange_pair(txt1, txt2):
    if txt1 and txt2:
        return txt1[0]==txt2[-1] and txt1[-1]==txt2[0]
    if not(txt1) and not(txt2):
        return True

    if not(txt1) or not(txt2):
        return False

def is_strange_pair(txt1, txt2):
    return txt1[0:1]==txt2[-1:] and txt1[-1:]==txt2[0:1]

print(is_strange_pair("", ""), True)
print(is_strange_pair("ratio", "orator"), True)
print(is_strange_pair("sparkling", "groups"), True)
print(is_strange_pair("mentee", "eminem"), True)
print(is_strange_pair("yahtzee", "easy"), True)
print(is_strange_pair("bush", "hubris"), False)
print(is_strange_pair("False", "True"), False)
print(is_strange_pair("cupid", "dionysus"), False)
print(is_strange_pair("futile", "elephant"), False)
print(is_strange_pair("", ""), True)
print(is_strange_pair("", "abc"), False)
print(is_strange_pair("a", "a"), True)
print(is_strange_pair("a", "b"), False)
print(is_strange_pair("&", "&"), True)
print(is_strange_pair("&!", "!&"), True)
print(is_strange_pair("5556", "65"), True)
