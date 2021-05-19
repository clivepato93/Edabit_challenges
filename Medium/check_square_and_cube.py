# https://edabit.com/challenge/NMHFTCMqW6j8sXkNd
from math import sqrt
def check_square_and_cube(lst):
    return sqrt(lst[0])**3==lst[1]

print(check_square_and_cube([4, 8]), True)
print(check_square_and_cube([5, 12]), False)
print(check_square_and_cube([9, 27]), True)
print(check_square_and_cube([25, 120]), False)
print(check_square_and_cube([25, 125]), True)
print(check_square_and_cube([36, 215]), False)
print(check_square_and_cube([36, 217]), False)
print(check_square_and_cube([144, 1728]), True)
print(check_square_and_cube([1, 1]), True)
print(check_square_and_cube([676, 17576]), True)
