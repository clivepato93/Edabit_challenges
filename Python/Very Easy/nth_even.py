# https://edabit.com/challenge/WYq4aFwSNuoyFCW5G
# Create a function that takes a number n and returns the nth even number.


def nth_even(n):
    return [i for i in range(0,n*2) if i %2 ==0][-1]

def nth_even(n):
    return 2*n-2


print(nth_even(1), 0)
print(nth_even(2), 2)
print(nth_even(3), 4)
print(nth_even(100), 198)
