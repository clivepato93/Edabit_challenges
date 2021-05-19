# https://edabit.com/challenge/ksiA6Q34iXgTcMeZF

def bonus(d):
    n=0
    while d >32:
        if d>48:
            n+=600
            # d-=1
        elif d>40:
            n+=550
            # d-=1
        else:
            n+=325
        d-=1
    return n


print(bonus(15), 0)
print(bonus(37), 1625)
print(bonus(50), 8200)
