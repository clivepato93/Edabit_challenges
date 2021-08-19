# https://edabit.com/challenge/vSkfpeFw54mvGJeuD

def lychrel(n):
    x = 0
    while str(n) != str(n)[::-1]:
        if x >= 500:
            return True

        n += int(str(n)[::-1])
        x += 1
    return x


print(lychrel(33), 0)
print(lychrel(65), 1)
print(lychrel(348), 3)
print(lychrel(196), True)
