# https://edabit.com/challenge/2bTdN8sr3PQKkLHur
def divisible_by_b(a, b):
    return [i for i in range(a,a+b) if i%b==0][0]

# a better solution as you don't encounter a run time error for large numbers
def divisible_by_b(a, b):
	return (a//b + 1)*b

print(divisible_by_b(17, 8), 24)
print(divisible_by_b(98, 3), 99)
print(divisible_by_b(14, 11), 22)
print(divisible_by_b(11, 8), 16)
print(divisible_by_b(450, 36), 468)
print(divisible_by_b(1019, 13), 1027)
