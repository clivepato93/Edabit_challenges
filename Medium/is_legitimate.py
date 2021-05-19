# https://edabit.com/challenge/iHfq7KA8MBuZqBGgo
def is_legitimate(lst):
    return 0==sum(lst[i][-1] for i in range(len(lst)))+sum(lst[i][0] for i in range(len(lst)))+sum(lst[0])+sum(lst[-1])


# print(is_legitimate([
# [0, 0, 0, 0, 0, 0, 0, 0],
# [0, 0, 1, 1, 1, 0, 0, 0],
# [0, 1, 1, 1, 1, 1, 0, 0],
# [0, 0, 0, 0, 0, 0, 0, 0]
# ]), True)

print(is_legitimate([
[0, 0, 0, 0, 0],
[0, 1, 1, 1, 1],
[0, 1, 1, 1, 0],
[0, 0, 0, 0, 0]
]), False)
