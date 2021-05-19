# https://edabit.com/challenge/nWtgKSNGQ3sB52rQ8

def evenly_divisible(a, b, c):
    return sum([number for number in range(a,b+1) if number % c ==0])

print(evenly_divisible(1, 10, 2), 30)
print(evenly_divisible(1, 10, 3), 18)
print(evenly_divisible(0, 12, 3), 30)
print(evenly_divisible(-10, -1, 2), -30)
print(evenly_divisible(-10, -1, 3), -18)
print(evenly_divisible(1, 10, 20), 0)
print(evenly_divisible(-10, 10, 2), 0)
