# https://edabit.com/challenge/DJa7PoKDhTTmwnxJg
# command to run in terminal
# python3 -m doctest -v adjacent_product.py

'''
>>> adjacent_product(['e','i'])
Traceback (most recent call last):
        ...
TypeError: can't multiply sequence by non-int of type 'str'
'''


def adjacent_product(lst):
    """ returns the highest product in a list

    >>> adjacent_product([3,6,-2,-5,7,3])
    21

    >>> adjacent_product([5,6,-4,2,3,2,-23])
    30

    >>> adjacent_product([])
    Traceback (most recent call last):
        ...
    ValueError: max() arg is an empty sequence

    >>> adjacent_product(['e','i'])
    Traceback (most recent call last):
        ...
    TypeError: can't multiply sequence by non-int of type 'str'
    """
    return max((a*b) for a,b in zip(lst,lst[1:]))

print(adjacent_product([3, 6, -2, -5, 7, 3]), 21)
print(adjacent_product([5, 6, -4, 2, 3, 2, -23]) , 30)
print(adjacent_product([0, -1, 1, 24, 1, -4, 8, 10]), 80)
print(adjacent_product([1, 0, 1, 0, 1000]), 0)
print(adjacent_product([-23, 4, -3, 8, -12]), -12)
print(adjacent_product([-1, -2]), 2)
