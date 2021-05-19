# https://edabit.com/challenge/jdJ5HYuhmrr89nhkB

def adds_n(n):
	return lambda x:n+x


adds1 = adds_n(1)
adds10 = adds_n(10)
adds5neg = adds_n(-5)
adds0 = adds_n(0)

print(adds1(3), 4)
print(adds1(5.7), 6.7)
print(adds10(44), 54)
print(adds10(20), 30)

print(adds5neg(0), -5)
print(adds5neg(77), 72)
print(adds0(77), 77)
