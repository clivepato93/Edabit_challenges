def chunkify(lst, s):
    n=[lst[(i-1)*s:i*s] for i in range(1,len(lst)+1)]
    return [i for i in n if i]

print(chunkify([2, 3, 4, 5], 2), [[2, 3], [4, 5]])
print(chunkify([2, 3, 4, 5, 6], 2), [[2, 3], [4, 5], [6]])
print(chunkify([2, 3, 4, 5, 6, 7], 3), [[2, 3, 4], [5, 6, 7]])
print(chunkify([2, 3, 4, 5, 6, 7], 1), [[2], [3], [4], [5], [6], [7]] )
print(chunkify([2, 3, 4, 5, 6, 7], 7), [[2, 3, 4, 5, 6, 7]] )
print(chunkify([2, 3, 4, 5], 3), [[2, 3, 4], [5]])
print(chunkify([2, 3, 4, 5, 6, 7, 8], 3), [[2, 3, 4], [5, 6, 7], [8]])

# https://edabit.com/challenge/biJPWHr486Y4cPLnD
