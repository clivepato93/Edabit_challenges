# https://edabit.com/challenge/MhQbon8XzsG3wJHdP
import math
def solve_for_exp(a, b):
    return round(math.log(b,a))

print(solve_for_exp(4, 1024), 5)
print(solve_for_exp(2, 1024), 10)
print(solve_for_exp(9, 3486784401), 10)
print(solve_for_exp(4, 4294967296), 16)
print(solve_for_exp(8, 134217728), 9)
print(solve_for_exp(19, 47045881), 6)
print(solve_for_exp(10, 100000000), 8)
