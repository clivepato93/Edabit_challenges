# https://edabit.com/challenge/oMCNzA4DcgpsnXTRJ
def missing_num(lst):
    complete_list= list(range(1,11))
    for value in complete_list:
        if value not in lst:
                return complete_list.pop(value-1)

def missing_num(lst):
    return sum(range(1,11))-sum(lst)

print(missing_num([1, 2, 3, 4, 6, 7, 8, 9, 10]), 5)
print(missing_num([1, 2, 3, 4, 6, 7, 8, 9, 10]), 5)
print(missing_num([7, 2, 3, 6, 5, 9, 1, 4, 8]), 10)
print(missing_num([7, 2, 3, 9, 4, 5, 6, 8, 10]), 1)
print(missing_num([10, 5, 1, 2, 4, 6, 8, 3, 9]), 7)
print(missing_num([1, 7, 2, 4, 8, 10, 5, 6, 9]), 3)
