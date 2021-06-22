# https://edabit.com/challenge/G5qw2KiTkHrAudsST
def decimal_part(n):
    # if '.' in str(n):
  return float("0.{}".format(str(n).split('.')[1])) if '.' in str(n) else 0


print(decimal_part(-3.73), 0.73)
print(decimal_part(10), 0)
