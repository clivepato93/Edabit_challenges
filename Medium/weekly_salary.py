def weekly_salary(hours):
    f=[]
    n=10
    w=20
    o=15
    for i,v in enumerate(hours,start=1):
        if i<6 and v<9:
            e=v*n
            f.append(e)
        elif i<6 and v>=9:
            e=8*n
            v-=8
            while v!=0:
                e+=o
                v-=1
            f.append(e)
        elif i>=6 and v<9:
            e=v*w
            f.append(e)
        elif i>=6 and v>=9:
            e=8*w
            v-=8
            while v!=0:
                e+=o*2
                v-=1
            f.append(e)
    return sum(f)


# print(weekly_salary([8, 8, 8, 8, 8, 8, 0]), 560)
# print(weekly_salary([8, 8, 8, 8, 8, 8, 8]), 720)
# print(weekly_salary([0, 0, 0, 0, 0, 0, 0]), 0)
# print(weekly_salary([1, 1, 1, 2, 5, 0, 0]), 100)
# print(weekly_salary([0, 0, 0, 0, 0, 16, 0]), 400)
print(weekly_salary([10, 10, 10, 10, 10, 10, 10]), 990)
# print(weekly_salary([0, 12, 0, 12, 0, 8, 8]), 600)
