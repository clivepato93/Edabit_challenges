# https://edabit.com/challenge/dCnX639Sheqdxqjm2
def parallel_resistance(lst):
    c=[1.0/n for n in lst]
    return round(1/sum(c),1)

# print(parallel_resistance([6, 3]), 2)
print(parallel_resistance([6, 3, 6]), 1.5)
# print(parallel_resistance([10, 10]), 5)
# print(parallel_resistance([10, 20, 10]), 4)
# print(parallel_resistance([60, 30, 20]), 10)
# print(parallel_resistance([16, 4]), 3.2)
# print(parallel_resistance([20, 5]), 4)
# print(parallel_resistance([500, 500, 500]), 166.7)
# print(parallel_resistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 0.3)
