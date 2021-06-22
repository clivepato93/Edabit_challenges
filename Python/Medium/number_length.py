# https://edabit.com/challenge/2zKetgAJp4WRFXiDT
def number_length(num):
    return len(str(num))

def number_length(n):
    if n == 0:
        return 1
    else:
	out = 0
	while n >= 1:
		n /= 10
		out += 1
	# if n == 0: out += 1
	return out


print(number_length(10), 2)
print(number_length(5000), 4)
print(number_length(0), 1)
print(number_length(4039182), 7)
print(number_length(9999999999999999), 16)
print(number_length(1), 1)
print(number_length(777777777777777777777777777777), 30)
