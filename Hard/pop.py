# https://edabit.com/challenge/3y2FmfjhbiQPPYbcn
def pop(s):
    c=[i for i in range(0,max(s))]
    i=s.index(max(s))
    return c+s[i:i+1]+c[::-1]


print(pop([0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0]), [0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0])
# print(pop([0, 0, 0, 0, 4, 0, 0, 0, 0]), [0, 1, 2, 3, 4, 3, 2, 1, 0])
# print(pop([0, 0, 0, 3, 0, 0, 0]), [0, 1, 2, 3, 2, 1, 0])
# print(pop([0, 0, 2, 0, 0]), [0, 1, 2, 1, 0])
# print(pop([0, 1, 0]), [0, 1, 0])
# print(pop([0]), [0])
