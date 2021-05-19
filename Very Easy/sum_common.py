# https://edabit.com/challenge/GQjKJtG6dqeyBSCqX
# stuck on this challenge
# completed with this solution
def sum_common(lst1, lst2, lst3):
    new_lst= []
    lst1.sort()
    lst2.sort()
    lst3.sort()
    for number in lst3:
        if number not in lst1 and number not in lst2:
            continue
        else:
            new_lst.append(number)
    return sum(new_lst)
#
from collections import Counter
def sum_common(lst1, lst2, lst3):
    return sum((Counter(lst1) & Counter(lst2) & Counter(lst3)).elements())
#
print(sum_common([1, 2, 2, 3, 2], [5, 3, 2, 2, 1], [7, 3, 2, 2, 1]), 8)
