# https://edabit.com/challenge/r7kZBzW3si9rJrLXh
import string
def get_sentence_value(txt):
    checker=string.ascii_lowercase

    txt=txt.split()
    c=0
    for word in txt:
        n=[letter for letter in word if letter.isalpha()]
        if all(l.isupper()  for l in n):
            c+=(sum(checker.find(l.lower())+1 for l in n)*2)
        else:
            c+=(sum(checker.find(l.lower())+1 for l in n))
    return c

    return [sum(checker.index(l)+1 for l in word if l.isalpha())*2 if all(l.isupper() for l in word) else sum(checker.index(l)+1 for l in word if l.isalpha()) for word in txt]
print(get_sentence_value("abc ABC Abc"), 24)
print(get_sentence_value("HELLO world"), 176)
