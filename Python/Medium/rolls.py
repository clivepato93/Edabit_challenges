# https://edabit.com/challenge/Yfm3h3nT3apARd4gC
def rolls(l):
    s=0
    s+=l[0]
    for i in range(1,len(l)):
        if l[i-1]==1:
            continue
        elif l[i-1]==6:
            s+=l[i]*2
        else:
            s+=l[i]

    return s



print(rolls([1,2,3]), 4)
print(rolls([2,6,2,5]), 17)
print(rolls([6,1,1]), 8)
print(rolls([5,1,6,1,6]), 8)
print(rolls([1,1,1]), 1)
print(rolls([1,1,3,1,1]), 2)
print(rolls([1,1,1,1,1]), 1)
print(rolls([6,6,6]), 30)
