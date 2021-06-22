# https://edabit.com/challenge/mJB9CYyGsADLQPjnx
def first_non_repeated_character(txt):
    c=[letter for letter in txt if txt.count(letter)==1]
    if c:
        return c[0]
    return False

def first_non_repeated_character(txt):
    r=sorted([letter for letter in set(txt) if txt.count(letter)==1],key=txt.index)
    return r[0] if r else False

print(first_non_repeated_character("the quick brown fox jumps then quickly blows air"), "f")
print(first_non_repeated_character("the misty examination pleases into the drab county"), "x")
print(first_non_repeated_character("hheelloo"), False, "Return False when every character repeats.")
print(first_non_repeated_character("it was then the darling top met the whispering wing"), "d")
print(first_non_repeated_character(""), False, "An empty string should return False.")
print(first_non_repeated_character("it was then the frothy word met the round night"), "a")
print(first_non_repeated_character("is the remind zone better than the section"), "m")
print(first_non_repeated_character("b"), "b")
print(first_non_repeated_character("what if the brainy boss ate the afternoon"), "w")
print(first_non_repeated_character("the sympathetic mixture rejects into the leafy objective"), "p")
