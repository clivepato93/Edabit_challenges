# https://edabit.com/challenge/8WcHytN6EEy3mMycG
def mangle(txt):
    v='aieou'
    txt =[chr(ord(l)+1) if l.isalpha() else l for word in txt.split() for l in word ]
    return txt


print(mangle("Fun times!"), "GvO Ujnft!")
print(mangle("Omega"), "Pnfhb")
print(mangle("abcz"), "bcdA", "Don't forget that \"z\" becomes \"a\"!")

