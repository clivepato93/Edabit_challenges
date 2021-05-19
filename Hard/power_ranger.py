from math import sqrt
def power_ranger(power, mi, ma):
    l=[i**power for i in range(1,ma+1) if i**power>=mi and i**power<=ma]
    return len(l)

print(power_ranger(5, 31, 33), 1)
print(power_ranger(4, 250, 1300), 3)
print(power_ranger(2, 49, 65), 2)
print(power_ranger(3, 1, 27), 3)
print(power_ranger(10, 1, 5), 1)
print(power_ranger(1, 1, 5), 5)
# print(power_ranger(2, 1, 100), 10)
