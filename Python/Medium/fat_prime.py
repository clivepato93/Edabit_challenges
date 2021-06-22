# https://edabit.com/challenge/3gziWsCxqGwGGZmr5
def fat_prime(a, b):
    for i in range(max(a,b),min(a,b)-1,-1):
        if i>1:
            for x in range(2,i):
                if i%x==0:
                    break

            else:
                return i

print(fat_prime(1, 2))
print(fat_prime(2, 10), 7)
print(fat_prime(10, 2), 7)
print(fat_prime(4, 24), 23)
print(fat_prime(16, 100), 97)
print(fat_prime(7, 49), 47)
print(fat_prime(200, 100), 199)
print(fat_prime(400, 1000), 997)
print(fat_prime(3297, 32970), 32969)
print(fat_prime(43297, 23175), 43291)
print(fat_prime(100000, 400000), 399989)

# print(int((400000/100.0)*70))
