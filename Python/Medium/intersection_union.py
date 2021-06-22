# https://edabit.com/challenge/Bb9PaM4B87L39SdAo
def intersection_union(lst1, lst2):
    return [sorted(set([i for i in lst2 if i in lst1])), sorted((set(lst1+lst2)))]


print(intersection_union([1, 2, 3, 4, 4], [4, 5, 9]), [[4], [1, 2, 3, 4, 5, 9]])
print(intersection_union([1, 2, 3], [4, 5, 6]), [[], [1, 2, 3, 4, 5, 6]])
print(intersection_union([1, 1], [1, 1, 1, 1]), [[1], [1]])
print(intersection_union([5, 5], [5, 6]), [[5], [5, 6]])
print(intersection_union([7, 8, 9, 6], [9, 7, 6, 8]), [[6, 7, 8, 9], [6, 7, 8, 9]])
print(intersection_union([4, 1, 1, 2], [1, 4, 4, 4, 4, 4, 4]), [[1, 4], [1, 2, 4]])
