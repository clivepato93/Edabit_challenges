# https://edabit.com/challenge/KqR5XyJSJcJFnD5uF
def median(nums):
    nums=sorted(nums)
    if len(nums)%2:
        return nums[len(nums)//2]
    return sum(nums[len(nums)/2-1:len(nums)/2+1])/2.0

print(median([3, 4, 4, 5, 6, 8]), 4.5)
print(median([1, 4, 4, 9, 9, 10]), 6.5)
print(median([1, 2, 4, 4, 4, 7, 7, 9, 10]), 4)
print(median([1, 7, 8, 8, 10, 10, 10]), 8)
print(median([2, 3, 3, 3, 3, 5]), 3.0)
print(median([1, 1, 3, 4, 6, 6, 6, 7, 10]), 6)
print(median([3, 4, 6, 6, 6, 7, 9, 10, 10]), 6)
print(median([3, 3, 4, 5, 6, 6, 7, 9]), 5.5)
print(median([3, 4, 4, 6, 9, 9, 9]), 6)
print(median([3, 4, 4, 5, 7, 8]), 4.5)
print(median([2, 4, 4, 5, 5, 8, 8, 9, 10]), 5)
print(median([4, 5, 5, 6, 8, 10]), 5.5)
print(median([1, 4, 4, 5, 8, 9]), 4.5)
print(median([1, 4, 8, 8, 8, 8, 9, 10]), 8.0)
print(median([1, 1, 2, 2, 10, 10]), 2.0)
print(median([3, 4, 4, 5, 7, 8, 9]), 5)
print(median([1, 1, 2, 2, 2, 4, 5, 6, 8]), 2)
print(median([2, 4, 5, 5, 7, 7, 9, 10]), 6.0)
print(median([1, 3, 4, 8, 8, 10, 10]), 8)
print(median([1, 1, 4, 5, 5, 9, 9, 10]), 5.0)
