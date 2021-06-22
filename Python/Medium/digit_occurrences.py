# https://edabit.com/challenge/tNRvtHKZxvqPRnAeF
def digit_occurrences(start, end, digit):
    return str([i for i in range(start,end+1)]).count(str(digit))

def digit_occurrences(start, end, digit):
    seq=[str(i) for i in range(start,end+1)]
    t=0
    for number in seq:
        t+=number.count(str(digit))
    return t

print(digit_occurrences(51, 55, 5), 6)
print(digit_occurrences(1, 8, 9), 0)
print(digit_occurrences(71, 77, 2), 1)
print(digit_occurrences(1, 14, 4), 2)
print(digit_occurrences(20, 30, 2), 11)
print(digit_occurrences(18, 37, 3), 10)
print(digit_occurrences(5, 335, 6), 63)
print(digit_occurrences(-19, 19, 0), 3)
print(digit_occurrences(-8, -1, 8), 1)
print(digit_occurrences(-5, -5, 4), 0)
print(digit_occurrences(-5, -5, 5), 1)
print(digit_occurrences(-50, -45, 4), 5)
print(digit_occurrences(-500, -45, 4), 190)
