# https://edabit.com/challenge/nzc3MX32Mwx4qAya3
def ranged_reversal(lst, start, finish):
    c=lst[start:finish+1][::-1]
    return lst[:start]+c+lst[finish+1:]


print(ranged_reversal([1, 2, 3, 4, 5, 6], 1, 3), [1, 4, 3, 2, 5, 6])
print(ranged_reversal([1, 2, 3, 4, 5, 6], 0, 4), [5, 4, 3, 2, 1, 6])
print(ranged_reversal([9, 8, 7, 4], 0, 0), [9, 8, 7, 4])
print(ranged_reversal([9, 8, 7, 4], 0, 3), [4, 7, 8, 9])
print(ranged_reversal([8, 9, 3, 3, 2, 7, 4], 5, 6), [8, 9, 3, 3, 2, 4, 7])
print(ranged_reversal([1, 2], 0, 1), [2, 1])
print(ranged_reversal([7, 8, 9, 4], 1, 2), [7, 9, 8, 4])
