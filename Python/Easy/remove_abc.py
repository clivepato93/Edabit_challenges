# https://edabit.com/challenge/QB6kPXQkFgMkzcc2h
def remove_abc(txt):
    return "".join(letter for letter in list(txt) if letter not in 'abc') if any(i in txt for i in "abc") else None


print(remove_abc("This might be a bit hard"), "This might e  it hrd")
print(remove_abc("This is awesome"), "This is wesome")
print(remove_abc("hello world!"), None)
print(remove_abc("coding is fun!"), "oding is fun!")
print(remove_abc(""), None)
