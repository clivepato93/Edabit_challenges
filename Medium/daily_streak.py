# https://edabit.com/challenge/sTJoRiHpQJvmqscGP

def daily_streak(lst):
    b=[]
    c=0
    for i in range(0,len(lst)):
        if lst[i]==True:
            c+=1
        elif lst[i]==False:
            b.append(c)
            c=0
    b.append(c)
    return max(b)

def daily_streak(lst):
    b=[]
    c=0
    for i in range(0,len(lst)):
        print(i)


# print(daily_streak([True, True, False, True]), 2)
# print(daily_streak([False, False, False]), 0)
print(daily_streak([True, True, True, False]), 3)
print(daily_streak([True, True, True, False, True, True]), 3)
# print(daily_streak([True, False]), 1)
# print(daily_streak([True, False, True]), 1)
print(daily_streak([True, False, True, True]), 2)
