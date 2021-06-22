# https://edabit.com/challenge/9TcXrWEGH3DaCgPBs
def find_odd(lst):
    for i in lst:
        if lst.count(i) % 2 != 0:
            return i


print(find_odd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]), 5)
print(find_odd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]), -1)
print(find_odd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]), 5)
print(find_odd([10]), 10)
print(find_odd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]), 10)
print(find_odd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]), 1)
