# https://edabit.com/challenge/dcX6gmNguEi472uFE
def double_factorial(num):
    final =1
    for i in range(num,0,-2):
        final*=i
    return final



print(double_factorial(-1), 1)
print(double_factorial(0), 1)
print(double_factorial(1), 1)
print(double_factorial(2), 2)
print(double_factorial(7), 105)
print(double_factorial(9), 945)
print(double_factorial(14), 645120)
print(double_factorial(22), 81749606400)
print(double_factorial(25), 7905853580625)
print(double_factorial(27), 213458046676875)
