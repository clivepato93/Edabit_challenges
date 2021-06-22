# https://edabit.com/challenge/Wd9cCvFKC3fHzgqSx
def num_split(num):
    n=str(num)
    f=[]
    for i,v in (enumerate(str(n)[::-1])):
        try:
            if num<0:f.append(int("-"+v.ljust(i+1,"0")))
            else: f.append(int(v.ljust(i+1,"0")))
        except:
            continue
    return f[::-1]

print(num_split(39), [30, 9])
print(num_split(-434), [-400, -30, -4])
print(num_split(100), [100, 0, 0])
print(num_split(3929), [3000, 900, 20, 9])
print(num_split(10293), [10000, 0, 200, 90, 3])
print(num_split(900), [900, 0, 0])
print(num_split(-100), [-100, 0, 0])
