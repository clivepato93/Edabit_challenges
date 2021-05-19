# https://edabit.com/challenge/6CGomPbu3dK536PH2
def accumulating_list(lst):
    return [sum(lst[:number]) for number in range(1,len(lst)+1)]

print(accumulating_list([1, 1, 1, 1, 1]), [1, 2, 3, 4, 5])
print(accumulating_list([1, 5, 7]), [1, 6, 13])
print(accumulating_list([1, 0, 1, 0, 1]), [1, 1, 2, 2, 3])
print(accumulating_list([1, 2, 3, 0, 0, 1]), [1, 3, 6, 6, 6, 7])
print(accumulating_list([]), [])
