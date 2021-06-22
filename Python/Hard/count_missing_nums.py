
# https://edabit.com/challenge/vBwRuR4mF5yQ4cNuc
def count_missing_nums(lst):
    lst=[int(i) for i in lst if i.isdigit()]
    return sum(1 for i in range(min(lst),max(lst)+1) if i not in lst)

print(count_missing_nums(['1', '3', '5', '7', '9']), 4)
print(count_missing_nums(['7', '3', '1', '9', '5']), 4)
print(count_missing_nums(['10', '20', '30', '40', '50']), 36)
print(count_missing_nums(['1', '78', 'B', '9', 'z']), 75)
print(count_missing_nums(['95', '96', '97', '98', '99']), 0)
print(count_missing_nums(['45', 'EDABIT', '56']), 10)
