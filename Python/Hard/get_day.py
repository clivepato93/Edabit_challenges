# https://edabit.com/challenge/3oqStN7bevcT72fgk

import datetime
def get_day(day):
    d=[int(i) for i in day.split('/')][::-1]
    x=datetime.datetime(d[0],d[2],d[1])
    return x.strftime("%A")


print(get_day('12/08/2011'), 'Thursday')
