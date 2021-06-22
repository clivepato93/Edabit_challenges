from datetime import date

def time_for_milk_and_cookies(dates):
    return dates.month == 12 and dates.day ==24

print(time_for_milk_and_cookies(date(2013, 12, 24)), True)
