# https://edabit.com/challenge/cRgZr9MRfwYWhkET6
def sum_recursively(lst):
    return sum(i for i in lst) if lst else 0

def sum_recursively(lst):
    c=0
    if lst:
        for i in lst:
            c+=i
        return c

def sum_recursively(lst):
    if not lst:
        return 0
    return lst.pop()+sum_recursively(lst[:])
print(sum_recursively([1, 2, 3, 4]), 10)
print(sum_recursively([-1, -1, -1]), -3)
print(sum_recursively([1]), 1)
print(sum_recursively([]), 0)
