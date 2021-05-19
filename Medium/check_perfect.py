# https://edabit.com/challenge/FJ8SmixDM6z3epzGy
def check_perfect(num):
    c=[i for i in range(1,num) if not num%i]
    return sum(c)==num


print(check_perfect(6), True)
print(check_perfect(28), True)
print(check_perfect(496), True)
print(check_perfect(8128), True)
print(check_perfect(33550336), True)
print(check_perfect(12), False)
print(check_perfect(97), False)
print(check_perfect(481), False)
print(check_perfect(1001), False)
print(check_perfect(55555), False)
