# https://edabit.com/challenge/ZQhRtfh9CB8aSwvrc
def greater_than_sum(nums):
    return all(nums[i]>sum(nums[:i]) for i in range(1,len(nums)))


print(greater_than_sum([1, -2, 11, 26]), False)
print(greater_than_sum([5, 8, 18, 32, 67, 131, 265, 529, 1056, 2115]), True)
print(greater_than_sum([8, 29, 62, 115, 232]), True)
print(greater_than_sum([5, 7, 15, 52, 88, 173, 346, 686, 1393, 2765]), False)
print(greater_than_sum([1, 25, 35, 74, 159, 305, 623]), True)
print(greater_than_sum([21, 40, 58, 134, 250]), False)
print(greater_than_sum([9, 32, 60, 107, 223, 442, 894, 1782, 3564]))
