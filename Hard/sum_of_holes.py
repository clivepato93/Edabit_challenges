# https://edabit.com/challenge/2tkcbQgPJZPPpzg2i
def sum_of_holes(n):
    a={"4":1,"6":1,"8":2,"0":1,"9":1}
    i=0
    for x in range(1,n+1):
        i+=(sum(a.get(l,0) for l in str(x)))
    return

def sum_of_holes(n):
    a={"4":1,"6":1,"8":2,"0":1,"9":1}
    return sum(sum(a.get(l,0) for l in str(i)) for i in range(4,n+1))

print(sum_of_holes(14), 7)
print(sum_of_holes(1), 0)
print(sum_of_holes(4), 1)
print(sum_of_holes(6), 2)
print(sum_of_holes(8), 4)
print(sum_of_holes(9), 5)
print(sum_of_holes(10), 6)
print(sum_of_holes(88), 90)
print(sum_of_holes(10000), 22893)
print(sum_of_holes(12345), 27991)
