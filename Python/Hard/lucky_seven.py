# https://edabit.com/challenge/9gmNpQ3m9BTYm3FKr
def lucky_seven(lst):
    f=[]
    for i in range(len(lst)):
        for j in range(i+1, len(lst)):
            for k in range(j+1, len(lst)):
                f.append([lst[i],lst[j],lst[k]])

    return any(sum(c)==7 and len(set(c))==3 for c in f)


print(lucky_seven([2, 4, 3, 8, 9, 1]), True)
print(lucky_seven([7, 7]), False)
print(lucky_seven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), True)
print(lucky_seven([1]), False)
print(lucky_seven([2, 3]), False)
print(lucky_seven([]), False)
print(lucky_seven([1, 10, 8, -3, -3, -2, 9]), True)
print(lucky_seven([-5, 7, -3, -5, 9, 3, 5]), True)
print(lucky_seven([1, -8]), False)
print(lucky_seven([3, 8, 0, -5]), False)
print(lucky_seven([10, 3, 2, 9, 2, -4, -8, 8]), True)
print(lucky_seven([-6, -1, 6, 6, -1, 0, -5, -2, 7]), True)
print(lucky_seven([-7, -3, 0, -4, 0, -6, -1, -5, 2, -3]), False)
print(lucky_seven([-9, 0, 8, -6]), False)
print(lucky_seven([4, 3]), False)
print(lucky_seven([0, 0, 0, 2, 3]), False)
print(lucky_seven([-5, -4, 6, 8, 9, 8, 8]), False)
print(lucky_seven([-9, 7, 6, -5, 10, 3, -8, 8, -6, 0]), True)
print(lucky_seven([-2, 4, 7, -3, -5, 7, -1]), False)
print(lucky_seven([6, -6, 4, 5, -4, 8, 6, 2]), True)
print(lucky_seven([-2, -5, -7, 4, -7, 9, -6, -6]), True)
print(lucky_seven([5, 2, -6, 6, -5, -5, 5, -10]), False)
print(lucky_seven([5, -5, -7, -10, -1, 3, 7, 0, -2, -7]), True)
