# https://edabit.com/challenge/KT8ApJ2EJcLz4K3t2
def two_digit_sum(n):
    sum = 0
    while n != 0:
        sum+=n%10
        n//=10
    return sum
#
#
print(two_digit_sum(45), 9)
