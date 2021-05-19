# https://edabit.com/challenge/egHeSWSjHTgzMysBX
def half_a_fraction(fract):
    fract=[int(i) for i in fract.split('/')]
    if not(fract[0]%2):
        fract[0]/=2
    else:
        fract[1]*=2
    return "/".join(str(int(i)) for i in fract)


print(half_a_fraction("1/2"), "1/4")
print(half_a_fraction("2/3"), "1/3")
print(half_a_fraction("3/8"), "3/16")
print(half_a_fraction("39/46"), "39/92")
print(half_a_fraction("52/97"), "26/97")
