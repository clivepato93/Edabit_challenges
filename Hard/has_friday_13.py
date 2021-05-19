# https://edabit.com/challenge/Xkc2iAjwCap2z9N5D
import datetime
from datetime import datetime
import calendar
def has_friday_13(month, year):
    date = '{} 13 {}'.format(month,year)
    spooky = datetime.strptime(date, '%m %d %Y').weekday()
    return (calendar.day_name[spooky]) == "Friday"

print(has_friday_13(3, 2020), True)
print(has_friday_13(10, 2017), True)
print(has_friday_13(1, 1985), False)
print(has_friday_13(5, 1619), False)
print(has_friday_13(6, 1614), True)
print(has_friday_13(8, 1767), False)
print(has_friday_13(6, 1589), False)
print(has_friday_13(2, 2015), True)
print(has_friday_13(3, 2015), True)
print(has_friday_13(11, 2015), True)
