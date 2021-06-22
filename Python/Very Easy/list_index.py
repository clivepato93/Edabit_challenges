# https://edabit.com/challenge/zT9GM9opQXK4qPuC4
def list_index(lst, idx):
    t = [val for row in lst for val in row ]
    i = [t[value-1] for value in idx]
    return ''.join(i)


results1 = list_index([['m', 'u', 'b'], ['a', 's', 'h'], ['i', 'r', '1']],  [1, 3, 5, 8])
print(results1, 'mbsr')
results1 = list_index([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 2, 3, 4, 5, 6, 7, 8, 9])
print(results1, 'myexample')
results2 = list_index([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 5, 6])
print(results2, 'mam')
results3 = list_index([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 3, 7, 8])
print(results3, 'mepl')
#Mubashir
