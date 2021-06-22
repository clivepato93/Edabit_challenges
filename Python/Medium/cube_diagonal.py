# https://edabit.com/challenge/9sN5tvXZjYCsKb4Mx
from math import sqrt
def cube_diagonal(volume):
    c=volume**(1/3.0)
    return round(sqrt(c**2+c**2+c**2),2)

def cube_diagonal(volume):
    c=volume**(1/3.0)
    return round(sqrt(c*6),2)


print(cube_diagonal(8), 3.46)
print(cube_diagonal(343), 12.12)
# print(cube_diagonal(1157.625), 18.19)
# print(cube_diagonal(12), 3.97)
# print(cube_diagonal(1), 1.73)
# print(cube_diagonal(48), 6.29)
# print(cube_diagonal(1728), 20.78)
