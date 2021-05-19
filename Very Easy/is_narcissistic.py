# https://edabit.com/challenge/2wJrWniq8yz79Yvgv

# A Narcissistic Number is a number that is the sum of its own digits each
# raised to the power of the number of digits.
# Create a function which returns True or False depending upon whether the
# given number n is a Narcissistic number or not.
# For example, take 153 (3 digits), which is narcisstic:

# def is_narcissistic(n):
#     c = [number for number in str(n)]
#     numbers = [int(digit)**len(c) for digit in c]
#     return sum(numbers)==n
#
# def is_narcissistic(n):
#     c = str(n)
#     return sum([int(digit)**len(c) for digit in c])==n
#
# print(is_narcissistic( 371 ))
