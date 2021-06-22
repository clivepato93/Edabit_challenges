# https://edabit.com/challenge/xbjDMxzpFcsAWKp97


def can_see_stage(s):
    s=s[::-1]
    a=len(s[0])
    x=[]
    for r in range(a):
        for i in range(0,len(s)):
            x.append(s[i][r])
    b=[x[v*len(s):(v+1)*len(s)] for v in range(0,len(s))]
    return all(r[i]>r[i+1] for r in b for i in range(0,len(r)-1))

print(can_see_stage(
[[1, 2, 3, 2, 1, 1],
[2, 4, 4, 3, 2, 2],
[5, 5, 5, 5, 4, 4],
[6, 6, 7, 6, 5, 5]]), True)

print(can_see_stage(
[[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]), True)
#
print(can_see_stage(
[[1, 2, 2],
[1, 2, 3],
[4, 4, 4]]), False)
#
# print(can_see_stage(
# [[1, 1, 2],
# [5, 2, 3],
# [4, 4, 4]]), False)
#
# print(can_see_stage(
# [[1, 1, 2],
# [5, 2, 3],
# [6, 4, 4]]), True)
#
# print(can_see_stage(
# [[0, 0, 0],
# [1, 1, 1],
# [2, 2, 2]]), True)
#
# print(can_see_stage(
# [[2, 0, 0],
# [1, 1, 1],
# [2, 2, 2]]), False)
#
# print(can_see_stage(
# [[1, 0, 0],
# [1, 1, 1],
# [2, 2, 2]]), False)
#
# print(can_see_stage(
# [[1, 2, 3, 2, 1, 1],
# [2, 4, 4, 3, 2, 2],
# [5, 5, 5, 10, 4, 4],
# [6, 6, 7, 6, 5, 5]]), False)
