# https://edabit.com/challenge/HSHHkdRYXfgfZSqri
def damage(damage, speed, time):
    # timers= ["second","minute",'hour']
    timer = 0
    if speed < 0 or damage <0:
        return 'invalid'
    else:
        if time == "second":
            timer=1
        elif time== "minute":
            timer = 60
        else:
            timer= 3600
    return damage*(speed*timer)

print(damage(40, 5, "second"), 200)
print(damage(100, 1, "minute"), 6000)
print(damage(2, 100, "hour"), 720000)
