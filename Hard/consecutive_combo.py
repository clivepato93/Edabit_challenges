
# https://edabit.com/challenge/mHLAmj4vmRuXrT8Nb
def consecutive_combo(lst1, lst2):
    c=lst1+lst2
    return sum(list(c))== sum(range(min(c),max(c)+1))


print(consecutive_combo([1, 4, 5, 7], [2, 3, 6]), True)
print(consecutive_combo([1, 4, 5, 6], [2, 7, 8, 9]), False)
print(consecutive_combo([1, 4, 5, 6], [2, 3, 7, 8, 10]), False)
print(consecutive_combo([7, 5, 4, 1], [2, 3, 6, 8]), True)
print(consecutive_combo([33, 34, 40], [39, 38, 37, 36, 35, 32, 31, 30]), True)
print(consecutive_combo([1, 4, 5, 6], [2, 3, 7, 8, 10]), False)
print(consecutive_combo([44, 46], [45]), True)
print(consecutive_combo([4, 3, 1], [2, 5]), True)
print(consecutive_combo([4, 3, 1], [2, 5, 7, 6]), True)
print(consecutive_combo([4, 3, 1], [7, 6, 5]), False)
print(consecutive_combo([4, 3, 1], [0, 7, 6, 5]), False)
print(consecutive_combo([44, 46], [45]), True)
