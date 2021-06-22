# https://edabit.com/challenge/yXipH35Xv4cBa8pnm
def microwave_buttons(time):
    b="30"
    n=''.join(time.lstrip("0").split(":"))
    if int(n)==100:
        n=str(1*60)
    p=""
    i=0
    if n==b:
        return 2
    elif int(n)==0:
        return 1
    while p!=n:
        p+=n[i]
        i+=1
        # print(p)
    # if bool(p)==bool(i):
    #     return 0
    return i+1



print(microwave_buttons('00:30'), 2)
print(microwave_buttons('01:00'), 3)
print(microwave_buttons('00:60'), 3)
print(microwave_buttons('00:20'), 3)
print(microwave_buttons('00:10'), 3)
print(microwave_buttons('00:70'), 3)
print(microwave_buttons('10:00'), 5)
print(microwave_buttons('00:00'), 1)
