def how_many_missing(lst):
    if not lst:
        return 0
    actual_list= [i for i in range(lst[0],lst[-1]+1)]
    checker = 0
    for i in actual_list:
        if i not in lst:
            checker+=1
    return checker

print(how_many_missing([1, 3]), 1)
print(how_many_missing([7, 10, 11, 12]), 2)
print(how_many_missing([1, 3, 5, 7, 9, 11]), 5)
print(how_many_missing([5, 6, 7, 8]), 0)
print(how_many_missing([1, 2, 3, 8, 9]), 4)
print(how_many_missing([1]), 0)
print(how_many_missing([]), 0)
