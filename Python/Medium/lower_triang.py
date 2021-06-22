# https://edabit.com/challenge/SqbyWYwqChQroXfhu
def lower_triang(arr):
    s=0
    n=0
    for i in range(0,len(arr)-1):
        arr[i]=[arr[i][x] if n>=x else 0 for x in range(s,len(arr[i]))]
        n+=1
    return arr

print(lower_triang(
[[1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]]),
[[1, 0, 0],
 [4, 5, 0],
 [7, 8, 9]])
