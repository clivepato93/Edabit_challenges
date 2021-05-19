# https://edabit.com/challenge/ZsLDkJfLGFkmjS2jE
def diving_minigame(lst):
    diving_meter=10
    for i in lst:

        if i<0:
            diving_meter-=2
        elif i>0:
            if diving_meter!=10:
                diving_meter+=4
        if diving_meter==0:
            return False
    return True

print(diving_minigame([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), True)
print(diving_minigame([-5, -15, -4, 0, 5]), True)
print(diving_minigame([0, -4, 0, -4, -5, -2]), True)
print(diving_minigame([-4, -3, -4, -3, 5, 2, -5, -20, -42, -4, 5, 3, 5]), True)

print(diving_minigame([-3, -6, -2, -6, -2]), False)
print(diving_minigame([-4, -5, -2, -7, 2, -1000, -2000, -1]), False)
print(diving_minigame([1, 2, 1, 2, 1, 2, 1, 2, 1, -3, -4, -5, -3, -4]), False)
print(diving_minigame([-5, -5, -5, -5, -5, 2, 2, 2, 2, 2, 2, 2, 2]), False)
