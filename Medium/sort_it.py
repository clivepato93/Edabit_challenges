# https://edabit.com/challenge/SChr3sBY5ZKwHBHLH
def sort_it(lst):
    def c(e):
        if isinstance(e,list):
            return e[0]
        return e
    
    return sorted(lst,key=c)


print(sort_it([4, 1, 3]), [1, 3, 4])
print(sort_it([[4], [1], [3]]), [[1], [3], [4]])
print(sort_it([4, [1], 3]), [[1], 3, 4])
print(sort_it([[4], 1, [3]]), [1, [3], [4]])
print(sort_it([[3], 4, [2], [5], 1, 6]), [1, [2], [3], 4, [5], 6])
print(sort_it([[3], 7, [9], [5], 1, 6]), [1, [3], [5], 6, 7, [9]])
print(sort_it([[3], 7, [9], [5], 1, 6, [0]]), [[0], 1, [3], [5], 6, 7, [9]])
