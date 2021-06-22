# https://edabit.com/challenge/o9zsDgapHMRzenPRk
# orginal solutions however the cause the machine to crash
# def smallNLargeN(n):
#     if n==1:
#         start=1
#         end=10
#         lst=[i for i in range(start,end)]
#         return [lst[0],lst[-1]]
#     start= "1"
#     end="1"
#     for index in range(1,n):
#         start+="0"
#     # print(start)
#     for index in range(0,n):
#         end+="0"
#     # print(end)
#     lst=[i for i in range(int(start),int(end))]
#     return [lst[0],lst[-1]]
# print(smallNLargeN(6), [10, 99], "Incorrect Answer")

# def smallNLargeN(n):
#     if n==1:
#         start=1
#         end=10
#         lst=[i for i in range(start,end)]
#         return [lst[0],lst[-1]]
#     start= "1"+"0"*(n-1)
#     end="1"+"0"*n
#     lst=[i for i in range(int(start),int(end))]
#     return [lst[0],lst[-1]]
# print(smallNLargeN(10), [10, 99], "Incorrect Answer")

# new solution
#
# def smallNLargeN(n):
#     if n==1:
#         return [1,10**n-1]
#     return [10**(n-1),10**n-1]

def smallNLargeN(a):
    upper_limit = (10**(a))
    lower_limit = 1 + upper_limit//10
    print(lower_limit)
	# return [lower_limit,upper_limit]

print(smallNLargeN(1), [10, 99], "Incorrect Answer")
