# https://edabit.com/challenge/6o5wkfmSaFXCJYqDx
def abcmath(a, b, c):
    numbers = []
    for x in range(0, b):
        numbers.append(a)
        a+=a
    print(numbers)
    # print(sum(numbers))
    return numbers[-1]%c==0

# def abcmath(a, b, c):
#     for x in range(0, b):
#         a+=a
#     print(a)
#     return a%c ==0
print(abcmath(42, 5, 10), False)
print(abcmath(1, 2, 3), False)
# print(abcmath(69, 15, 9), False)
print(abcmath(9, 2, 52), False)
print(abcmath(5, 2, 3), False)
print(abcmath(5, 2, 1), True)
# print(abcmath(261, 2, 1), True)
# print(abcmath(22, 2, 22), True)
# print(abcmath(69, 12, 3), True)
