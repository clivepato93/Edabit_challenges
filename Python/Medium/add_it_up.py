# https://edabit.com/challenge/ePaMPXuKScJNs34Ay
def add_it_up(lst):
    if all(type(i)==int or type(i)==float for i in lst):
        return sum(lst)
    return type(lst[0])(i for r in lst for i in r)


print(add_it_up([4, 14, 17, 10]), 45)
print(add_it_up([1.5, 8, 9.7, 7.5, 13]), 39.7)
print(add_it_up([[1, 2], [4], [9, 8, 6], [5, 5]]), [1, 2, 4, 9, 8, 6, 5, 5])
print(add_it_up([[1, {4}],[()], [(9,), {1:2}], []]), [1, {4}, (), (9,), {1:2}])
print(add_it_up([(2, 4, 5), (6,), (9, 8, 7)]), (2, 4, 5, 6, 9, 8, 7))
print(add_it_up([(7, [8, 5]), (), ({9, 8},), ((),) ,({8:{9:(1, 2)}},)]), (7, [8, 5], {9, 8}, (), {8:{9:(1, 2)}}))
