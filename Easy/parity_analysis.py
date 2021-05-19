def parity_analysis(num):
    return (num%2==1 and sum(int(i) for i in str(num))%2==1) or (num%2==0 and sum(int(i) for i in str(num))%2==0)
# ,sum([int(i) for i in num])

def parityAnalysis(num):
	digit_sum = sum(int(i) for i in str(num))
	return digit_sum%2 == num%2

print(parity_analysis(243), True)
print(parity_analysis(4), True)

# https://edabit.com/challenge/jzCGNwLpmrHQKmtyJ
