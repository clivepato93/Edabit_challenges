# https://edabit.com/challenge/P76RqHjfSPpiG2Ce2
# my solution

'''
Given a list with an even amount of numbers, return True
if the sum of two numbers in the list is even and False if the sum of two numbers in the list is odd.


'''

def odd_sum_list(lst):
    a = lst[::2]
    b = lst[1::2]
    c= zip(a,b)
    return [True if (lst[i]+lst[i+1])%2==0 else False for i in range(len(lst)-1)]


# another one
def odd_sum_list(arr):
    print([sum(x) for x in zip(arr,arr[1:])])
    return [sum(x)%2==0 for x in zip(arr,arr[1:])]

print(odd_sum_list([11, 15, 6, 8, 9, 10]))
