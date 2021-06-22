# https://edabit.com/challenge/JSJEuuWduBB5hEX6k
def XO(txt):
    x = 0
    o= 0
    for i in txt:
        if i == "x" or i =="x".upper():
            x+=1
        elif i == "o" or i =="o".upper():
            o +=1
    return x ==o

print(XO("ooxx"), True)
print(XO("xooxx"), False)
print(XO("ooxXm"), True)
print(XO("zpzpzpp"), True)
print(XO("zzoo"), False)
print(XO("Xo"), True)
print(XO("x"), False)
print(XO("o"), False)
print(XO("xxxoo"), False)
print(XO(""), True)
