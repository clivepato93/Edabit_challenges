# https://edabit.com/challenge/kzZD8Xp3EC7bipfxe
def worded_math(equ):
    equ=equ.lower().split()
    first={"one":"1",
           "plus":'+',
           "wo":"-",
           "minus":"-",
           "zero":"0"}
    new_equ=" ".join(first.get(i) for i in equ)
    new_equ=eval(new_equ)
    s={2:"Two",
           1:"One",
           0:"Zero"}
    return s[new_equ]


print(worded_math("One plus one"), "Two")
print(worded_math("zero Plus one"), "One")
print(worded_math("one minus one"), "Zero")
