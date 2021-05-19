# https://edabit.com/challenge/c4WKPr4upiKx8GwJK
def duplicate_nums(nums):
    return None if not sorted(set([num for num in nums if nums.count(num)>1])) else sorted(set([num for num in nums if nums.count(num)>1]))


print(duplicate_nums([1, 2, 3, 4, 3, 5, 6]), [3])
print(duplicate_nums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), None)
print(duplicate_nums([20, 30, 40, 30, 20, 40]), [20, 30, 40])
print(duplicate_nums([100, 59, 12, 13, 54, 76, 100, 14, 12]), [12, 100])
print(duplicate_nums([81, 72, 43, 72, 81, 99, 99, 100, 12, 54]),[72, 81, 99])
print(duplicate_nums([11, 22, 33, 44, 55, 44, 33, 22, 11]), [11, 22, 33, 44])
