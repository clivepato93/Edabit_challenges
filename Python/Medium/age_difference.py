# https://edabit.com/challenge/2NPjN7DDvyi6f5CHF

def age_difference(f, s):
    c=f-s
    return abs(c-s)

print(age_difference(36, 7), 22)
print(age_difference(55, 30), 5)
print(age_difference(42, 21), 0)
print(age_difference(22, 1), 20)
print(age_difference(29, 0), 29)
