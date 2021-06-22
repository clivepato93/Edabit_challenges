# https://edabit.com/challenge/aiSKWWjjxTeJTqxZL

def complete_square(lst):
    mini=min(len(lst[0]),len(lst))
    maxi=max(len(lst[0]),len(lst))
    d=maxi-mini
    if len(lst[0])<len(lst) and len(lst[0])%2==0 and len(lst)%2 :
        return [r+[0]*d for r in lst]
    elif len(lst[0])>len(lst) and len(lst[0])%2==0 and len(lst)%2==0:
        return lst+[[0]*maxi]*d
    elif len(lst[0])>len(lst) and len(lst[0])%2==0 and len(lst)%2:
        return lst+[[0]*maxi]*d
    elif len(lst[0])>len(lst) and len(lst[0])%2 and len(lst)%2==0:
        return lst+[[0]*maxi]*d
    elif len(lst[0])<len(lst) and len(lst[0])%2 and len(lst)%2:
        return [r+[0]*d for r in lst]
    return lst

print(complete_square(
[[2, 5]]),
[[2, 5],
 [0, 0]])
#
print(complete_square(
[[2, 5],
 [1, 7]]),
[[2, 5],
 [1, 7]])
#
print(complete_square(
[[1, 2],
 [3, 4],
 [5, 6]]),
[[1, 2, 0],
 [3, 4, 0],
 [5, 6, 0]])

print(complete_square(
[[1, 2, 3, 4],
 [5, 6, 7, 8]]),
[[1, 2, 3, 4],
 [5, 6, 7, 8],
 [0, 0, 0, 0],
 [0, 0, 0, 0]])

print(complete_square(
[[1, 2, 3, 2, 1],
 [5, 6, 7, 6, 5]]),
[[1, 2, 3, 2, 1],
 [5, 6, 7, 6, 5],
 [0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0]])
#
print(complete_square(
[[1, 8, 9],
 [3, 6, 7],
 [5, 4, 5],
 [7, 2, 3],
 [9, 0, 1]]),
[[1, 8, 9, 0, 0],
 [3, 6, 7, 0, 0],
 [5, 4, 5, 0, 0],
 [7, 2, 3, 0, 0],
 [9, 0, 1, 0, 0]])
