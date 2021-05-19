# https://edabit.com/challenge/HYjQKDXFfeppcWmLX

def is_curzon(num):
	return (2**num+1)%(2*num+1)==0


print(is_curzon(5), True)
print(is_curzon(10), False)
print(is_curzon(14), True)
print(is_curzon(86), True)
print(is_curzon(90), True)
print(is_curzon(115), False)
print(is_curzon(120), False)
print(is_curzon(194), True)
print(is_curzon(293), True)
