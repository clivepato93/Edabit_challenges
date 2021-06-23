# https://edabit.com/challenge/MSX7AHcNiCZpCsiXY
import datetime
def how_unlucky(y):
    lst=[datetime.datetime(y,i,13).strftime("%A") for i in range(1,13)]
    return sum(i=='Friday' for i in lst)


print(how_unlucky(2000), 1)
print(how_unlucky(2001), 2)
print(how_unlucky(2002), 2)
print(how_unlucky(2003), 1)
print(how_unlucky(2004), 2)
