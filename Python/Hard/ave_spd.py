# https://edabit.com/challenge/NYEaXXCnSj9jteNWA


def ave_spd(up_time, up_spd, down_spd):
    divs=[i for i in range(2,61) if up_time%i==0 and 60%i==0][-1]
    one=(up_time/divs,float(60/divs))
    two=(up_spd,1)
    three=(one[0]*two[0],one[1]*two[1])
    four=three[0]/three[1]
    half=four
    full=four*2
    divs_2=[i for i in range(2,61) if down_spd%i==0 and half%i==0][-1]
    five=(half/divs_2,float(down_spd/divs_2))
    # five=half/float(down_spd)
    return full/float(one[0]/float(one[1])+(five[0]/float(five[1])))

print(ave_spd(18, 10, 30), 15)
print(ave_spd(18, 20, 60), 30)
print(ave_spd(30, 10, 30), 15)
print(ave_spd(30, 8, 24), 12)
