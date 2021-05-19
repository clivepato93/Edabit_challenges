# https://edabit.com/challenge/eAnhzXPeGbobqk2P2
def century(year):
    if year%100==0 and year%10==0:
        year=int(str(year)[:2])
    else:
        year=int(str(year)[:2])+1
    t="th"
    if str(year)[0]!="1" and str(year)[1]=="1":
        t="st"
    return "{}{} century".format(str(year),t)
    # else:
    #     if str(year)[1]!="1":
    #         return str(int(str(year)[:2])+1)+"th century"

print(century(1756), "18th century")
print(century(1555), "16th century")
print(century(1000), "10th century")
print(century(1001), "11th century")
print(century(2005), "21st century")
print(century(1789), "18th century")
print(century(1510), "16th century")
print(century(1615), "17th century")
print(century(2000), "20th century")
print(century(1997), "20th century")
