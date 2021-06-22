# https://edabit.com/challenge/MojpPTZYQyN5L2i4a
'''
You work in a toy car workshop, and your job is to build toy cars from a collection of parts.
Each toy car needs 4 wheels, 1 car body, and 2 figures of people to be placed inside.
Given the total number of wheels, car bodies and figures available,
how many complete toy cars can you make?
'''
#
# def cars(wheels, bodies, figures):
#     return min([wheels//4,bodies//1,figures//2])
# print(cars(37, 15, 20), 9)
# print(cars(3, 29, 54), 0)
# print(cars(28, 34, 80), 7)
#

# def last(a, n):
#     if n == 0:
#         return []
#     elif len(a)> n:
#         return a[len(a)-n:]
#     elif len(a)==n:
#         return a[len(a)-n:]
#     else:
#         return "invalid"
#
# print(last([1, 2, 3, 4, 5], 0), [])
# print(last([1, 2, 3, 4, 5], 1), [5])
# print(last([4, 3, 9, 9, 7, 6], 3), [9, 7, 6])
# print(last([5, 1, 2], 3), [5, 1, 2])
# print(last([], 1), "invalid")
# print(last([1, 2, 3, 4, 5], 7), "invalid")
