# https://edabit.com/challenge/cgyHTJDW5brpXGDy6

# def hours_passed(time1, time2):
#     x=0
#     t1=time1.split()
#     t2=time2.split()
#     if t1[-1]!=t2[-1]:
#         x+=12
#     time=int(t2[0].split(":")[0])-int(t1[0].split(":")[0])
#     return ["no time passed","{} hours".format(time+x)][time+x>0]
#
#
#
# print(hours_passed("3:00 AM", "9:00 AM"), "6 hours")
# print(hours_passed("2:00 PM", "4:00 PM"), "2 hours")
# print(hours_passed("1:00 AM", "3:00 PM"), "14 hours")
# print(hours_passed("2:00 AM", "3:00 PM"), "13 hours")
# print(hours_passed("8:00 AM", "8:00 PM"), "12 hours")
# print(hours_passed("1:00 AM", "1:00 AM"), "no time passed")
# print(hours_passed("12:00 PM", "12:00 PM"), "no time passed")

# https://edabit.com/challenge/6BXmvwJ5SGjby3x9Z
# amateur hour
def hours_passed(time1, time2):
    x=0
    t1=time1.split()
    t2=time2.split()
    if t1[-1]!=t2[-1]:
        x+=12
    t1time=int(t1[0].split(":")[0])
    t2time=int(t2[0].split(":")[0])
    if t1time==12 and "AM" in time1:
        t1time=0
    return ["no time passed","{} hours".format((t2time-t1time)+x)][t2time-t1time+x>0]


# print(hours_passed("3:00 AM", "9:00 AM"), "6 hours")
# print(hours_passed("2:00 PM", "4:00 PM"), "2 hours")
# print(hours_passed("1:00 AM", "3:00 PM"), "14 hours")
# print(hours_passed("2:00 AM", "3:00 PM"), "13 hours")
# print(hours_passed("8:00 AM", "8:00 PM"), "12 hours")
# print(hours_passed("12:00 AM", "10:00 PM"), "22 hours", "No, this is not 10 hours...")
# print(hours_passed("1:00 AM", "1:00 AM"), "no time passed")
# print(hours_passed("12:00 PM", "12:00 PM"), "no time passed")


print(%12)
