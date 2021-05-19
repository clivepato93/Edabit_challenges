# https://edabit.com/challenge/iA5aeTFGLcxx94Wjh
def delete_occurrences(lst, num):
    a=[]
    for i in lst:
        if a.count(i)<num:
            a.append(i)
    return a

print(delete_occurrences([1, 1, 1, 1], 2), [1, 1])
print(delete_occurrences([True, True, True], 3), [True, True, True])
print(delete_occurrences([13, True, 13, None], 1), [13, True, None])
print(delete_occurrences([], 100), [])
print(delete_occurrences(["John", "John", "Marry", "Marry"], 1), ["John", "Marry"])
print(delete_occurrences(["Marry", "John", None, "John", False, "John", 0, "John", "Marry", "Marry", "John"], 3), ["Marry", "John", None, "John", False, "John", 0, "Marry", "Marry"])
print(delete_occurrences([20, 37, 20, 21], 1), [20, 37, 21])
print(delete_occurrences([1, 1, 3, 3, 7, 2, 2, 2, 2], 3), [1, 1, 3, 3, 7, 2, 2, 2])
print(delete_occurrences([1, 2, 3, 1, 1, 2, 1, 2, 3, 3, 2, 4, 5, 3, 1],3), [1, 2, 3, 1, 1, 2, 2, 3, 3, 4, 5])
