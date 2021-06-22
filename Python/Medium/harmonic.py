# https://edabit.com/challenge/cyzbSvpfSzDjGi4TB
def harmonic(n):
	return round(sum(1/i for i in range(1,n+1)),3)

print(harmonic(10), 2.929)
print(harmonic(1), 1)
print(harmonic(12345), 9.998)
print(harmonic(0), 0)
print(harmonic(5000), 9.095)
print(harmonic(2), 1.5)
