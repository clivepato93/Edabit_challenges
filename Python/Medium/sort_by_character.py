

# https://edabit.com/challenge/NQToxLLFCjugHWBoZ

def sort_by_character(lst, n):
    return sorted(lst,key=lambda x:x[n-1])



print(sort_by_character(['az16', 'by35', 'cx24'], 1), ['az16', 'by35', 'cx24'])
print(sort_by_character(['az16', 'by35', 'cx24'], 2), ['cx24', 'by35', 'az16'])
print(sort_by_character(['az16', 'by35', 'cx24'], 3), ['az16', 'cx24', 'by35'])
print(sort_by_character(['az16', 'by35', 'cx24'], 4), ['cx24', 'by35', 'az16'])
print(sort_by_character(['apple', 'mayor', 'bendy', 'petal'], 5), ['apple', 'petal', 'mayor', 'bendy'])
print(sort_by_character(['team', 'mate', 'bade'], 3), ['team', 'bade', 'mate'])
