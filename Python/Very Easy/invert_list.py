
# https://edabit.com/challenge/Jm4eKTENReSiQFw9t
def invert_list(lst):
    return [abs(number) if number != abs(number) else -number for number in lst ]

print(invert_list([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5])
