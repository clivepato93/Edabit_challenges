# https://edabit.com/challenge/aSZ28TjivazB3aErL
def letters_only(s):
    if not s:
        return False
    elif len(s)>0:
        return all(char==" " or char.islower() for char in s)



print(letters_only("PYTHON"), False)
print(letters_only("python"), True)
print(letters_only("html css javascript"), True)
print(letters_only("12321313"), False)
print(letters_only("@-=001-302;4'23"), False)
print(letters_only("the quick brown fox"), True)
print(letters_only("hello 123 world"), False)
print(letters_only("i have spaces"), True)
print(letters_only(""), False)
print(letters_only("i have numbers 1 and 2)"), False)
