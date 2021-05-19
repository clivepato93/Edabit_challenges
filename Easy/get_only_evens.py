# https://edabit.com/challenge/TJxPyuusqjtWF9rff
def get_only_evens(nums):
	return [i for i in nums[::2] if i%2==0]

def get_only_evens(nums):
	return [v for i,v in enumerate(nums) if v%2==0 and i%2==0]

print(get_only_evens([47, 31, 24, 37, 29, 41, 31, 49, 4, 24]), [24, 4])
