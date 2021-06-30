# https://edabit.com/challenge/uAZcCxNj3TtqvxP34
def mode(nums):
    c=max(nums,key= lambda i:nums.count(i))
    return sorted(set([c]+[i for i in nums if nums.count(i)==nums.count(c) and i!=c ]))


print(mode([1, 2, 3, 3, 6, 7, 8, 9]), [3])
print(mode([2, 3, 3, 4, 4, 6, 7, 8]), [3, 4])
print(mode([1, 6, 6, 7, 7, 8, 9]), [6, 7])
print(mode([4, 4, 4, 6, 8, 9, 10, 10]), [4])
print(mode([1, 4, 6, 7, 9, 9]), [9])
print(mode([2, 2, 2, 3, 7, 8, 9, 9]), [2])
print(mode([2, 4, 5, 5, 7, 8, 10, 10]), [5, 10])
print(mode([1, 1, 4, 4, 5, 7, 9]), [1, 4])
