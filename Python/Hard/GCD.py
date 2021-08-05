# https://edabit.com/challenge/Nda8BQHhZSajpnt5z
def GCD(lst):
    lst=sorted(lst)
    if all(i%lst[0]==0 for i in lst):
        return lst[0]
    l=[1]
    for i in range(2,int(lst[0]*.5)):
        if all(n%i==0 for n in lst):
            l.append(i)
    return max(l)

print(GCD([10, 20, 40]), 10)
print(GCD([7, 11]), 1)
print(GCD([156, 84, 60, 1188, 252]), 12)
print(GCD([1, 2, 3, 4, 5]), 1)
print(GCD([777, 77, 7, 14]), 7)
print(GCD([20, 20, 40, 100]), 20)
print(GCD([731, 43, 473, 2623]), 43)

print("________")
# https://edabit.com/challenge/d54ESyh48HKacmTwb
def gcd(lst):
    n=min(lst)
    t=False
    while t==False:
        if not all(num%n==0 for num in lst):
            n-=1
        else:
            t=True
    return n

print(gcd([84, 70, 42, 56]), 14)
print(gcd([19, 38, 76, 133]), 19)
print(gcd([120, 300, 95, 425, 625]), 5)
print(gcd([6, 18]), 6)
print(gcd([5, 15]), 5)
print(gcd([120, 105, 300, 95, 425, 625, 18]), 1)