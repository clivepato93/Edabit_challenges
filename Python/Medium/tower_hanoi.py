# https://edabit.com/challenge/ZmjLLhFc4TqaMPSki
def tower_hanoi(discs):
	return 2**discs-1


print(tower_hanoi(3), 7)
print(tower_hanoi(5), 31)
print(tower_hanoi(8), 255)
print(tower_hanoi(19), 524287)
print(tower_hanoi(9), 511)
print(tower_hanoi(13), 8191)
print(tower_hanoi(0), 0)
