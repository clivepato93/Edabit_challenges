# https://edabit.com/challenge/TiqTew3PcofZgdbR4
def bitwise_and(n1, n2):
	return n1 & n2

def bitwise_or(n1, n2):
	return n1 | n2

def bitwise_xor(n1, n2):
	return n1 ^ n2
#

print(bitwise_and(7, 12), 4)
print(bitwise_or(7, 12), 15)
print(bitwise_xor(7, 12), 11)

print(bitwise_and(32, 17), 0)
print(bitwise_or(32, 17), 49)
print(bitwise_xor(32, 17), 49)

print(bitwise_and(13, 19), 1)
print(bitwise_or(13, 19), 31)
print(bitwise_xor(13, 19), 30)
