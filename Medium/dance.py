# https://edabit.com/challenge/8cJnRPxtjNP64k5fq
def dance(lst, parameter):
    w=[f for f,m in lst]
    m=[m for f,m in lst]
    if parameter== "men":
        return [[a,b] for a,b in list(zip(w,m[::-1]))]
    return [[a,b] for a,b in list(zip(w[::-1],m))]

print(dance([["Ana", "Mark"], ["Lisa", "John"]], "women"), [["Lisa", "Mark"], ["Ana", "John"]])
print(dance([["Ana", "Bob"], ["Amy", "Josh"], ["Catty", "Mark"]], "men"), [["Ana", "Mark"], ["Amy", "Josh"], ["Catty", "Bob"]])
print(dance([["Ana", "Bob"], ["Amy", "Josh"], ["Catty", "Mark"]], "women"), [["Catty", "Bob"], ["Amy", "Josh"], ["Ana", "Mark"]])
print(dance([["w1", "m1"], ["w2", "m2"], ["w3", "m3"], ["w4", "m4"], ["w5", "m5"], ["w6", "m6"]], "men"), [["w1", "m6"], ["w2", "m5"], ["w3", "m4"], ["w4", "m3"], ["w5", "m2"], ["w6", "m1"]])
# print(dance([["w1", "m1"], ["w2", "m2"], ["w3", "m3"], ["w4", "m4"], ["w5", "m5"], ["w6", "m6"]], "women"), [["w6", "m1"], ["w5", "m2"], ["w4", "m3"], ["w3", "m4"], ["w2", "m5print"])
