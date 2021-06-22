# https://edabit.com/challenge/eboWapTruZFxmdcwp

def is_positive_dominant(lst):
    p=[i for i in lst if i >0]
    n=[i for i in lst if i<0]
    return len(set(p))>len(set(n))


print(is_positive_dominant([1, 1, 1, 1, -3, -4]), False)
print(is_positive_dominant([5, 99, 832, -3, -4]), True)
print(is_positive_dominant([5, 0]), True)
print(is_positive_dominant([0, -4, -1]), False)
print(is_positive_dominant([1, 2, 3, -1]), True)
print(is_positive_dominant([1, 0, 0, -1]), False)
print(is_positive_dominant([5, 4, 3, 0, 0, -1, -1, -2, -2]), True)
print(is_positive_dominant([52, 52, 52, -3, 2, 2, 2, -4]), False)
print(is_positive_dominant([3, 3, 3, 3, -1, -1, -1]), False)
