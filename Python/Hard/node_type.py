# no yet completed ..
# https://edabit.com/challenge/Cp3JRpooAqfA4kGkv
# def node_type(_N, _P, n):
#     if n not in _N:
#         return "Not Exist"
#     lst=list(zip(_N[::-1],_P[::-1]))
#     # c=max()
#     for i in range(1,len(lst)+1):
#         if -1 not in lst[0]:
#             temp=lst[i]
#             lst[i]=lst[0]
#             lst[0]=temp

    # return lst
def node_type(_N, _P, n):
    lst=list(zip(_N,_P))
    inner=round(sum(a for a,b in lst)/float(len(lst)))
    for a,b in lst:
        if n==a and b==-1:
            return "Root"
        elif n==a and  (b==inner or (b-1)==inner or (b+1)==inner):
            return 'Inner'
        elif n==a and (b>inner or b<inner):
            return "Leaf"
    return 'Not exist'

print(node_type([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 1 ), "Leaf")
print(node_type([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 2), "Inner")
print(node_type([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 3), "Leaf")
print(node_type([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 5), "Root")
print(node_type([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 6), "Leaf")
print(node_type([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 8), "Inner")
print(node_type([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 9), "Leaf")
print(node_type([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 10), "Not exist")
print(node_type([6, 3, 1, 2, 5, 7, 4, 6, 8], [3, 1, 6, 1, 2, 3, 8, -1, 6], 8), "Inner")
print(node_type([5, 6, 8, 7, 1, 9, 4, 11, 10, 2], [8, 8, -1, 8, 7, 4, 5, 4, 1, 1], 11), "Leaf")
print(node_type([3, 2, 4, 9, 11, 10, 8, 5, 6, 7], [-1, 3, 3, 2, 3, 4, 4, 9, 10, 8], 3 ), "Root")
print(node_type([5, 6, 8, 7, 1, 9, 4, 11, 10, 2], [8, 8, -1, 8, 7, 4, 5, 4, 1, 1], 4), "Inner")
print(node_type([3, 2, 4, 9, 11, 10, 8, 5, 6, 7], [-1, 3, 3, 2, 3, 4, 4, 9, 10, 8], 6), "Leaf")
print(node_type([6, 3, 1, 2, 5, 7, 4, 6, 8], [3, 1, 6, 1, 2, 3, 8, -1, 6], 5), "Leaf")
print(node_type([5, 6, 8, 7, 1, 9, 4, 11, 10, 2], [8, 8, -1, 8, 7, 4, 5, 4, 1, 1], 8), "Root")
print(node_type([3, 2, 4, 9, 11, 10, 8, 5, 6, 7], [-1, 3, 3, 2, 3, 4, 4, 9, 10, 8], 10), "Inner")
