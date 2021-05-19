# https://edabit.com/challenge/T2G9LR2qNw4rFNu9t

def chunk(a, s):
    c=[a[i*s:(i+1)*s] for i in range(s+1)]
    return [i for i in c if i]
print(chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]])
print(chunk([1, 2, 3, 4, 5], 2), [[ 1, 2], [3, 4], [5]])
print(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3), [[ 1, 2, 3], [4, 5, 6], [7, 8]])
print(chunk([1, 2, 3, 4, 5], 4), [[ 1, 2, 3, 4], [5]])
print(chunk([1, 2, 3, 4, 5], 10), [[ 1, 2, 3, 4, 5]])
