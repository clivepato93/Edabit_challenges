# https://edabit.com/challenge/tdbDAiGLFyrTdo49q
def find_difference(a, b):
    c = 1
    d = 1
    for i in a:
        c*=i
    for i in b:
        d*=i
    return abs(c-d)
print(find_difference([ 28, 16, 29 ], [ 7, 8, 17 ]), 12040)
# print(find_difference([ 9, 22, 18 ], [ 16, 24, 10 ]), 276)
# print(find_difference([ 1, 9, 25 ], [ 10, 7, 9 ]), 405)
