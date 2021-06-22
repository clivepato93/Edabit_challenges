# https://edabit.com/challenge/6rztMMwkt6ijzqcF6clive

def is_repeated(strn):
    divisors=[strn.count(strn[:i])for i in range(1,25) if 24%i==0 and strn.count(strn[:i])*strn[:i]==strn]
    return max(divisors) if max(divisors)>1 else False

print(is_repeated(3*"repeated"), 3)
print(is_repeated(4*"repeat"), 4)
print(is_repeated(12*"no"), 12)
print(is_repeated(6*"more"), 6)
print(is_repeated(6*"puns"), 6)
print(is_repeated(24*","), 24)
print(is_repeated(4*"please"), 4)
print(is_repeated(6*"stop"), 6)
print(is_repeated(8*"now"), 8)
print(is_repeated("overintellectualizations"), False)
print(is_repeated("intercomprehensibilities"), False)
print(is_repeated("microspectrophotometries"), False)
print(is_repeated(2*"accomplished"), 2)
