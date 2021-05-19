# https://edabit.com/challenge/YSikG4DEsnxahg2u4
import datetime

def get_days(date1, date2):
    d=date1-date2
    return abs(d.days) if d.days<0 else d.days*-1


print(get_days(datetime.date(2019, 6, 14), datetime.date(2019, 6, 20)), 6)
print(get_days(datetime.date(2018, 12, 29), datetime.date(2019, 1, 1)), 3)
print(get_days(datetime.date(2019, 7, 20), datetime.date(2019, 7, 30)), 10)
print(get_days(datetime.date(2020, 5, 24), datetime.date(2020, 9, 25)), 124)
print(get_days(datetime.date(2020, 5, 24), datetime.date(2019, 5, 24)), -366)
print(get_days(datetime.date(2020, 4, 30), datetime.date(1963, 11, 23)), -20613)
