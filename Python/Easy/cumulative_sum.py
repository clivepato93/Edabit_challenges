# https://edabit.com/challenge/qCLK8BomNpXTtFYTn
def cumulative_sum(lst):
    f=[]
    c=0
    for i in range(0,len(lst)):
        c=c+lst[i]
        f.append(c)
    return f
    # return f




# print(cumulative_sum([]), [], 'Should return an empty array if given an empty array.')
# print(cumulative_sum([1]), [1], 'Should work with 1 value.')
# print(cumulative_sum([1, 2,3]))

# print(cumulative_sum([1, 2, 3]), [1, 3, 6], 'Should work with multiple values.')
print(cumulative_sum([-1, -2, -3]), [-1, -3, -6], 'Should work with multiple negative values.')
print(cumulative_sum([1, -2, 3]), [1, -1, 2], 'Should work with multiple positive and negative values.')
# print(cumulative_sum([3, 3, -2, 408, 3, 3, 0, 66, 2, -2, 2, 3, 4, 2, -47, 3, 3, 2]), [3, 6, 4, 412, 415, 418, 418, 484, 486, 484, 486, 489, 493, 495, 448, 451, 454, 456], 'Should work with long array.')
