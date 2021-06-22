# https://edabit.com/challenge/MTGTSJvAi2iwd2Ygs
def valid_division(d):
    try:
        c= eval(d+".0")
        if c==int(c):
            return True
        return False
    except:
        return "invalid"


print(valid_division("6/3"), True)
print(valid_division("30/25"), False)
print(valid_division("0/3"), True, "0/3 equals 0, 0 is a whole number without decimals")
print(valid_division("13/12"), False)
print(valid_division("329/329"), True)
print(valid_division("0/0"), "invalid")
print(valid_division("10/0"), "invalid")
print(valid_division("20/5"), True)
