# https://edabit.com/challenge/yYE8bJ5jhJgAoc5ir

def bugger(num):
    c=0
    while len(str(num))!=1:
        num=eval("*".join(i for i in str(num)))
        c+=1
    return c


print(bugger(39), 3)
print(bugger(4), 0)
print(bugger(25), 2)
print(bugger(999), 4)
