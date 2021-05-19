# https://edabit.com/challenge/riF3RkrcKpBp3sKCX
def cap_space(txt):
    # sentence_checker=[i for i,letter in enumerate(txt) if letter.isupper()]
    # words=[]
    for letter in txt:
        if letter.isupper():
            txt=txt.replace(letter, " "+letter)
    return txt.lower()


print(cap_space("helloWorld"), "hello world")
print(cap_space("iLoveMyTeapot"), "i love my teapot")
print(cap_space("stayIndoors"), "stay indoors")
