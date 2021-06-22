# https://edabit.com/challenge/R4D59C9CQbJvqWaKd
def batting_avg(lst):
    return str(round(sum(a for a,b in lst)/float(sum(b for a,b in lst)),3))[1:].ljust(4,"0")

print(batting_avg([
      [0, 0],
      [1, 3],
      [2, 2],
      [0, 4],
      [1, 5],
    ]), '.286')

print(batting_avg([
      [2, 5],
      [2, 3],
      [0, 3],
      [1, 5],
      [2, 4],
    ]), '.350')
