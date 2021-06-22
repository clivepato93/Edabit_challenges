# https://edabit.com/challenge/zgu7m6W7i3z5SYwa6
def is_equal(lst):
    a=str(lst[0])
    b=str(lst[1])
    return sum(int(i) for i in a) == sum(int(i) for i in b)

print(is_equal([11, 20]), True)
print(is_equal([14, 21]), False)
print(is_equal([0, 0]), True)
print(is_equal([101, 201]), False)
