# https://edabit.com/challenge/ke4FSMdG2XYxbGQny
def even_odd_transform(lst, n):
    return [number+(2*n) if number%2 else number-(2*n) for number in lst]
print(even_odd_transform([3, 4, 9], 3), [9, -2, 15])
print(even_odd_transform([0, 0, 0], 10), [-20, -20, -20])
print(even_odd_transform([1, 2, 3], 1), [3, 0, 5])
print(even_odd_transform([55, 90, 830], 2), [59, 86, 826])
