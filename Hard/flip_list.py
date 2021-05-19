# https://edabit.com/challenge/QoavwQhmrDpXJhBW9

def flip_list(lst):
    if not lst:
        return lst
    elif type(lst[0])==list:
        return [val for row in lst for val in row]
    else:
        return [[v] for v in lst]



print(flip_list([1, 2, 3, 4]), [[1], [2], [3], [4]])
print(flip_list([[5], [6], [9]]), [5, 6, 9])
print(flip_list([[7], [8], [9], [55]]), [7, 8, 9, 55])
print(flip_list([7, 8, 9, 55]),[[7], [8], [9], [55]])
print(flip_list([[1], [2]]), [1, 2])
print(flip_list([5, 8]), [[5], [8]])
print(flip_list([2]), [[2]])
print(flip_list([]), [])
