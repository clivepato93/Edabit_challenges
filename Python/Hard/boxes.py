# https://edabit.com/challenge/QdEAMeXNJAivcTMiT
def boxes(w):
    e=1
    x=0
    checker=0
    s=0
    for i,v in enumerate(w):
        if sum(w[s:e+1])>10:
            checker+=1
            s=e
            e+=1
        elif sum(w[s:e])<11:
            e+=1
        if i==len(w)-1:
            checker+=1
        x+=1
    return checker

print(boxes([1, 5, 3, 1, 2, 3, 2, 6, 3, 1, 3, 8, 1]), 5)
print(boxes([8, 3, 2, 1, 1, 2, 1, 3, 2, 1]), 3)
#
print(boxes( [7, 1, 2, 6, 1, 2, 3, 5, 9, 2, 1, 2, 5]), 5)
print(boxes([2, 7, 1, 3, 3, 4, 7, 4, 1, 8, 2]), 5)
print(boxes([1, 3, 3, 3, 2, 1, 1, 9, 7, 10, 8, 6, 1, 2, 9]), 8)
print(boxes([4, 1, 2, 3, 5, 5, 1, 9]), 3)
print(boxes([3, 1, 2, 7, 2, 6, 1]), 3)
print(boxes([4, 6, 1, 9, 6, 1, 1, 9, 2, 9]), 6)
