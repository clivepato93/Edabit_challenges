# https://edabit.com/challenge/JPdKrztrcL7DpooDr

def collatz(n):
    s=0
    lst=[n]
    while n!=1:
        if n%2==0:
            n//=2
        else:
            n*=3
            n+=1
        s+=1
        lst.append(n)
    return [s,max(lst)]

print(collatz(1), [0, 1])
print(collatz(3), [7, 16])
print(collatz(9), [19, 52])
print(collatz(27), [111, 9232])
print(collatz(81), [22, 244])

# https://edabit.com/challenge/fJaZYmdovhzHa7ri3
def max_collatz(num):
	s=0
    lst=[n]
    while n!=1:
        if n%2==0:
            n//=2
        else:
            n*=3
            n+=1
        s+=1
        lst.append(n)
    return max(lst)
print(collatz(1), [0, 1])
print(collatz(3), [7, 16])
print(collatz(9), [19, 52])
print(collatz(27), [111, 9232])
print(collatz(81), [22, 244])
