# https://edabit.com/challenge/oCe79PHB7yoqkbNYb

def break_point(num):
    lst=[]
    num=str(num)

    # return lst
    if sum(int(x) for x in num[:round(len(num)*0.5)])==sum(int(i) for i in num[round(len(num)*0.5):]):
        return True
    for i in range(1,round(len(num)*0.5)+1):
        # for x in range(i+1,round(len(num)*0.5)+1):
        lst.append((sum(int(i) for i in num[:i+1])))
    for a in range(int(len(num)),int(len(num)//2),-1):
    # #     for o in range(int(len(num)),int(len(num)//2-1),-1):
        lst.append((sum(int(i) for i in num[a-1:])))
    return any(lst[i]==lst[i-1] for i in range(1,len(lst)))


print(break_point(159780), True)
print(break_point(112), True)
print(break_point(10), False)
print(break_point(1034), True)
print(break_point(343), False)
print(break_point(1119444), True)
print(break_point(6666), True)
print(break_point(9777771), False)
# print(round(3*0.5))
