# https://edabit.com/challenge/52ZJEy5fc6zmeGYcM

def outlier_number(lst):
    evens = [i for i in lst if i %2 ==0]
    odds = [i for i in lst if i %2 !=0]
    if len(evens) < len(odds):
        return evens[0]
    else:
        return odds[0]


print(outlier_number([2, 3, 4]), 3)
print(outlier_number([1, 2, 3]), 2)
print(outlier_number([4, 1, 3, 5, 9]), 4)
print(outlier_number([2, 6, 8, 10, 3]), 3)
