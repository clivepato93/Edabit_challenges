# https://edabit.com/challenge/2hvruws6kgiKj98Rvs
def to_scottish_screaming(txt):
    txt=txt.upper()
    return "".join(letter if letter not in 'AIOU' else "E" for letter in list(txt))

print(to_scottish_screaming("lorem ipsum"),"LEREM EPSEM")
print(to_scottish_screaming("Leeroy jenkins!"),"LEEREY JENKENS!")
print(to_scottish_screaming("A, wonderful, day, don't, you, think?"),"E, WENDERFEL, DEY, DEN'T, YEE, THENK?")
print(to_scottish_screaming("Hello world"),"HELLE WERLD")
print(to_scottish_screaming("start queueing you oafs"),"STERT QEEEEENG YEE EEFS")
