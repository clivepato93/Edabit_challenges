# https://edabit.com/challenge/eomsubuQLmwASWbMB
import calendar
def weekday_dutch(date):
    c=[int(i) for i in date.split()]
    d=["maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag","zondag"  ]
    return d[calendar.weekday(c[2], c[1], c[0])]


print(weekday_dutch("21 9 1970"), "maandag")
print(weekday_dutch("22 9 1970"), "dinsdag")
print(weekday_dutch("23 9 1970"), "woensdag")
print(weekday_dutch("24 9 1970"), "donderdag")
print(weekday_dutch("25 9 1970"), "vrijdag")
print(weekday_dutch("26 9 1970"), "zaterdag")
