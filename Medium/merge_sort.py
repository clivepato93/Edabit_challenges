# https://edabit.com/challenge/zxAXEgpjQ3XrLs2K7
def merge_sort(lst1, lst2):
    t=lst1==sorted(lst1)
    if t:
        return sorted(lst1+lst2)
    return sorted(lst1+lst2,reverse=True)


print(merge_sort([1, 2, 3], [5, 4, 6]), [1, 2, 3, 4, 5, 6])
print(merge_sort([8, 6, 4, 2], [-2, -6,  0, -4 ]), [8, 6, 4, 2, 0, -2, -4, -6])
print(merge_sort([120, 180, 200], [190, 175, 130]), [120, 130, 175, 180, 190, 200])
print(merge_sort([25, 21, 17, 13], []), [25, 21, 17, 13])
print(merge_sort([1024, 2048], [512, 128, 64]), [64, 128, 512, 1024, 2048])
print(merge_sort([0, 1], [1, 1, 1, 1, 0, 0, 0, 0]), [0, 0, 0, 0, 0, 1, 1, 1, 1, 1])
print(merge_sort([-1, -3], [11, -5, 7, -11]), [11, 7, -1, -3, -5, -11])
print(merge_sort([10, 20, 30, 40, 50, 60, 80, 90], [70]), [10, 20, 30, 40, 50, 60, 70, 80, 90])
