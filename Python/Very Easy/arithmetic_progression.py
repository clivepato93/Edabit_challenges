# https://edabit.com/challenge/neMnxprBg6cM5Z4gr

def arithmetic_progression(start, diff, n):
    listn = []
    # start = start
    if diff<0:
        for i in range(1,n+1):
            listn.append(start)
            start -= abs(diff)
    elif diff>0:
        for i in range(start,n+1):
            listn.append(start)
            start += diff

    else:
        for i in range(start,n+1):
            listn.append(start)
    return ', '.join(str(numbers)for numbers in listn)
#
def arithmetic_progression(start, diff, n):
    l =[]
    for i in range(n):
        l.append(start)
        start += diff
    return ', '.join(str(numbers)for numbers in l)

print(arithmetic_progression(1, 2, 5))
print(arithmetic_progression(100, -10, 10), "100, 90, 80, 70, 60, 50, 40, 30, 20, 10")

print(arithmetic_progression(1, -3, 10), "1, -2, -5, -8, -11, -14, -17, -20, -23, -26")

print(arithmetic_progression(1, 0, 5))
