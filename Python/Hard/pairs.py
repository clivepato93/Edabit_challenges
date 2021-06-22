
# https://edabit.com/challenge/HrCuzAKE6skEYgDmf

def pairs(lst):
    if len(lst)>1:
        a ,b=lst[:int(round(len(lst)/1.5))],lst[-1:int(round(len(lst)/2)-0.5):-1]
        return [list(i) for i in list(zip(a,b))]
    return lst*2


print(pairs([1, 2, 3, 4, 5, 6, 7]), [[1, 7], [2, 6], [3, 5], [4, 4]])
print(pairs([1, 2, 3, 4, 5, 6]), [[1, 6], [2, 5], [3, 4]])
print(pairs([5, 9, 8, 1, 2]), [[5, 2], [9, 1], [8, 8]])
print(pairs([1, 1, 4, 4, 5, 5]), [[1, 5], [1, 5], [4, 4]])
print(pairs([9, 9, 9, 9, 3, 3, 9]), [[9, 9], [9, 3], [9, 3], [9, 9]])
print(pairs([5, 6, 7]), [[5, 7], [6, 6]])
print(pairs([5, 6]), [[5, 6]])
print(pairs([5]), [[5, 5]])
print(pairs([]), [])

print(7%2)
