# https://edabit.com/challenge/a6XHqehbttHnjE7bK
def is_repdigit(num):
    if num<0:
        return False
    return len(set(str(num)))==1


print(is_repdigit(6), True)
print(is_repdigit(66), True)
print(is_repdigit(666), True)
print(is_repdigit(6666), True)
print(is_repdigit(1001), False)
print(is_repdigit(-11), False, "The number must be >= 0")
