# https://edabit.com/challenge/qaNmoG4dAXRL5JqvA
def sum_fractions(lst):
    return round(sum([a/b for a,b in lst]))


print(sum_fractions([[18, 13], [4, 5]]), 2)
