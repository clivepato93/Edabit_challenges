# https://edabit.com/challenge/HnrmZxpGRoPkmZsfs
import datetime
def is_valid_date(d, m, y):
    try:
        x=datetime.datetime(y, m, d)
        return True
    except:
        return False

print(is_valid_date(35, 2, 2020), False)
print(is_valid_date(8, 3, 2020), True)
print(is_valid_date(31, 6, 1980), False)
print(is_valid_date(27, 9, 1822), True)
print(is_valid_date(34, 7, 2008), False)
