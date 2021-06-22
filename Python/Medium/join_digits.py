# https://edabit.com/challenge/K6oxe3bvPqaQWxkFw
# my solution
def join_digits(n):
    ranges=[str(i) if len(str(i))==1 else str(i)[0]+"-"+str(i)[-1] for i in range(1,n+1)]
    return "-".join(ranges)

# most voted solution
# this is a better solution due to iterating through every digit of string number
# where as my solution will encounter problems if the number given is a 3 digit number
def join_digits(n):
	return '-'.join(j for i in range(1, n+1) for j in str(i))

print(join_digits(1), "1")
print(join_digits(2), "1-2")
print(join_digits(3), "1-2-3")
print(join_digits(4), "1-2-3-4")
print(join_digits(5), "1-2-3-4-5")
print(join_digits(6), "1-2-3-4-5-6")
print(join_digits(7), "1-2-3-4-5-6-7")
print(join_digits(8), "1-2-3-4-5-6-7-8")
print(join_digits(9), "1-2-3-4-5-6-7-8-9")
print(join_digits(10), "1-2-3-4-5-6-7-8-9-1-0")
