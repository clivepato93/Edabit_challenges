def multiply(n1, n2):
    if n1>0 and n2>0:
        return sum(n1 for i in range(1,n2+1))
    elif n1<0 and n2<0:
        return sum(abs(n1) for i in range(1,abs(n2-1)))
    elif n1<0 and n2>0:
        return sum(n1 for i in range(1,abs(n2+1)))
    else:
        return sum(-n1 for i in range(n2,0,+1))
    # return sum(n1 for i in range(max(0,n2),min(0,n2)))
# if (n1>=0 and n2>=0) or (n1<0 and n2<0) else -sum(n1 for i in range(0,n2))

# https://edabit.com/challenge/H9gjahbSRbbGEpYta
def multiply(n1, n2):
    c=sum(n1 for i in range(1,abs(n2)+1))
    return -c if n2<0 else c
print(multiply(3, 2), 6)
print(multiply(9, 1), 9)
print(multiply(2, 2), 4)
print(multiply(1, 1), 1)
print(multiply(702, 392), 275184)
print(multiply(9, 9), 81)
print(multiply(40, 31), 1240)
print(multiply(4, 10), 40)
print(multiply(-2, 4), -8)
print(multiply(-3, -20), 60)
print(multiply(40, -10), -400)
