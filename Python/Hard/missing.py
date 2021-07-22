# https://edabit.com/challenge/7jHaJKK7Yw3SPTJRF

def missing(lst1, lst2):
    for i in lst1:
        if lst1.count(i)!=lst2.count(i):
            return i

print(missing([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 4, 5, 6, 7, 8]), 2)
print(missing(['Jane', 'is', 'pretty', 'ugly'], ['Jane', 'is', 'pretty']), 'ugly')
print(missing([True, True, False, False, True], [False, True, False, True]), True)
print(missing(['different', 'types', '5', 5, [5], (5,)], ['5', 'different', [5], 'types', 5]), (5,))
print(missing(list('fate'),list('fat')), 'e')