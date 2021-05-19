# https://edabit.com/challenge/6pFZZ9CdSFDGhvNBc

import math
def factor_group(num):
	l =[i for i in range(1,num+1) if num%i==0]
	return 'even' if len(l)%2==0 else 'odd'

print(factor_group(33), "even")
print(factor_group(36), "odd")
print(factor_group(7), "even")
print(factor_group(1), "odd")
