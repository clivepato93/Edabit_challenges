# https://edabit.com/challenge/kmruefq3dhdqxtLeM
def sum_digits(a, b):
    numbers = [str(i) for i in range(a,b+1)]
    return sum(sum(int(c) for c in i) for i in numbers)


print(sum_digits(7, 8), 15)
print(sum_digits(17, 20), 29)
print(sum_digits(10, 12), 6)
print(sum_digits(500, 506), 56)
print(sum_digits(66, 789), 9324)
