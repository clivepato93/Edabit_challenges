# https://edabit.com/challenge/5XXXppAdfcGaootD9
def sum_odd_and_even(lst):
    return [sum(i for i in lst if i%2==0),sum(i for i in lst if i%2)]

print(sum_odd_and_even([1, 2, 3, 4, 5, 6]), [12, 9])
print(sum_odd_and_even([-1, -2, -3, -4, -5, -6]), [-12, -9])
print(sum_odd_and_even([0, 0]), [0, 0])
print(sum_odd_and_even([]), [0, 0])
