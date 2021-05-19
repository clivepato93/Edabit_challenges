# https://edabit.com/challenge/HLdBD3XrBcapupuE6


def add(n):
    return lambda x:x+n


print(add(20)(10), 30)
print(add(30)(10), 40)
print(add(100)(100), 200)
print(add(-30)(80), 50)
print(add(-10)(-10), -20)
