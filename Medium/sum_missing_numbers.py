# https://edabit.com/challenge/Aj377wZtxWya7gjK9
def sum_missing_numbers(lst):
    missing_numbers=[i for i in range(min(lst),max(lst)+1) if i not in lst]
    return sum(missing_numbers)

print(sum_missing_numbers([1, 2, 3, 4, 5]), 0)
print(sum_missing_numbers([4, 3, 8, 1, 2]), 18)
print(sum_missing_numbers([17, 16, 15, 10, 11, 12]), 27)
print(sum_missing_numbers([-1, -4, -3, -2, -6, -8]), -12)
