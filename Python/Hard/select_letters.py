# https://edabit.com/challenge/eBTCwYHpdaHciieuP

def select_letters(s1, s2):
    word = ""
    for i in range(0, len(s2)):
        if s2[i].isupper():
            word += s1[i]
    for i in range(0, len(s1)):
        if i <= len(s2)-1 and s1[i].isupper():
            word += s2[i]
    return word


print(select_letters("heLLO", "GUlp"), "help")
print(select_letters("1234567", "XxXxX"), "135")
print(select_letters("EVERYTHING", "SomeThings"), "EYSomeThings")
print(select_letters("PaTtErN", "pAtTeRn"), "atrpten")
print(select_letters("nothing", "nothing"), "")
print(select_letters("What do you think of it so far?", "RUBBISH!"), "What doR")
