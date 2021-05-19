# https://edabit.com/challenge/x44ZRvQtJ6TyZQhwx
def is_pandigital(n):
    return len(set(str(n)))==10

print(is_pandigital(123456789876543210), True)
print(is_pandigital(546732965015), False)
print(is_pandigital(6781235184590), True)
print(is_pandigital(9432821089765), True)
print(is_pandigital(678798215643817), False)
print(is_pandigital(90864523148909), False)
print(is_pandigital(112233445566778899), False)
print(is_pandigital(647380265483206), False)
print(is_pandigital(38165975424790), True)
print(is_pandigital(8146327815320), False)
print(is_pandigital(768431605430), False)
print(is_pandigital(4920124852367763), True)
print(is_pandigital(60543981597247), True)
print(is_pandigital(10282343456789), True)
