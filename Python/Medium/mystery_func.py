# https://edabit.com/challenge/cXfcK7iXpuZ67taSh
def mystery_func(txt):
    pairs=[a*int(b) for a,b in list(zip(txt[::2],txt[1::2]))]
    return "".join(pairs)

print(mystery_func("A4B5C2"), "AAAABBBBBCC")
print(mystery_func("C2F1E5"), "CCFEEEEE")
print(mystery_func("T4S2V2"), "TTTTSSVV")
print(mystery_func("A1B2C3D4"), "ABBCCCDDDD")


# https://edabit.com/challenge/QCXxnDHsfF7gtkxze

def mystery_func(num):
    e=1
    for i in str(num):
        e*=int(i)
    return e


print(mystery_func(152), 10)
print(mystery_func(832), 48)
print(mystery_func(5511), 25)
print(mystery_func(19), 9)
print(mystery_func(133), 9)
