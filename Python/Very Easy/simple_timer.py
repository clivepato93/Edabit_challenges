# https://edabit.com/challenge/mtfCmMo9fL5yqB3Sy

def simple_timer(s):
    lst=[]
    hours=divmod(s,3600)
    lst.append(hours[0])
    s-=hours[0]*3600
    seconds=divmod(s,60)
    for i in seconds:
        lst.append(i)
    return ":".join(str(i).zfill(2) for i in lst)


# print(simple_timer(0), "00:00:00")
# print(simple_timer(59), "00:00:59")
print(simple_timer(60), "00:01:00")
print(simple_timer(3599), "00:59:59")
# print(simple_timer(3600), "01:00:00")
# print(simple_timer(86399), "23:59:59")
# print(simple_timer(86400), "24:00:00")
# print(simple_timer(359999), "99:59:59")
# Mubashir
