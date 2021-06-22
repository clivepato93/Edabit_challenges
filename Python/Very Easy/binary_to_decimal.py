# https://edabit.com/challenge/EDDKCedujFqWJwsFZ
# my solution
def binary_to_decimal(lst):
    lst = lst[::-1]
    tt=0
    for index in range(len(lst)):
        value = lst[index]
        if value == 1:
            tt+=1*(2**index)
        else:
            tt+=0
    return tt

# other solutions

def binary_to_decimal(lst):
	power = 0
	decimal = 0
	for i in reversed(lst):
		decimal += i * (2 ** power)
		power += 1
	return decimal

def binary_to_decimal(lst):
	return sum([x*(2**ind) for ind, x in enumerate(lst[::-1])])

def binary_to_decimal(lst):
    lst=lst[::-1]
    return sum([lst[index]*(2**index) for index in range(len(lst))])

def binary_to_decimal(lst):
	return int("".join(map(str, lst)), 2)

print(binary_to_decimal([0, 0, 0, 1]))
print(binary_to_decimal([0, 0, 1, 0]))
print(binary_to_decimal([1, 1, 1, 1, 1, 0, 1, 1, 0, 1]))
