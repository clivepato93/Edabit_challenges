# https://edabit.com/challenge/wsCshmu5zkN5BfeAC
def divisible_by_left(n):
    n=str(n)
    f=[]
    f.append(False)
    for number in range(1,len(n)):
        try:
            if int(n[number])%int(n[number-1])==0:
                f.append(True)
            else:
                f.append(False)
        except ZeroDivisionError:
            f.append(False)
    return f

print(divisible_by_left(1), [False])
print(divisible_by_left(1248), [False, True, True, True])
print(divisible_by_left(4321), [False, False, False, False])
print(divisible_by_left(73312), [False, False, True, False, True])
print(divisible_by_left(2026), [False, True, False, True])
print(divisible_by_left(635), [False, False, False])
print(divisible_by_left(1337), [False, True, True, False])
print(divisible_by_left(135028), [False, True, False, True, False, True])
