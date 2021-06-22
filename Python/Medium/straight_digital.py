# https://edabit.com/challenge/nmoohLwP962r6P355
def straight_digital(n):
    if n<100:
        return "Not Straight"
    n = [int(i) for i in list((str(n)))]
    c=[n[i]-n[i-1] for i in range(1,len(n))]
    d=list(set(c))
    return "Trivial Straight" if all(numbers==0 for numbers in c) else "Not Straight" if len(d)>1 else d[0]

print(straight_digital(123), 1, "Example #1")
print(straight_digital(753), -2, "Example #2")
print(straight_digital(666), "Trivial Straight", "Example #3")
print(straight_digital(124), "Not Straight", "Example #4")
print(straight_digital(99), "Not Straight", "Example #5")
print(straight_digital(13579), 2)
print(straight_digital(111111), "Trivial Straight")
print(straight_digital(9630), -3)
print(straight_digital(-123456789), "Not Straight")
print(straight_digital(951), -4)
print(straight_digital(24642), "Not Straight")
print(straight_digital(147), 3)
print(straight_digital(13579), 2)
print(straight_digital(9876543210), -1)
print(straight_digital(1313), "Not Straight")
