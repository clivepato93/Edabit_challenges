# https://edabit.com/challenge/guR6aa2zytfZvywMS
def total_overs(balls):
    overs,balls=divmod(balls,6)
    return float("{}.{}".format(overs,balls))


print(total_overs(2400), 400)
print(total_overs(164), 27.2)
print(total_overs(945), 157.3)
print(total_overs(5), 0.5)
print(total_overs(7), 1.1)
print(total_overs(15), 2.3)
print(total_overs(0), 0)
