# https://edabit.com/challenge/RxHMzNBx3HHNMydno
def total_distance(height, length, tower):
    print((tower/height),(height+length))
    return round((tower/height)*(height+length),1)


print(total_distance(0.2, 0.4, 100.0), 300.0)
print(total_distance(0.12, 0.1, 10.0), 18.3)
print(total_distance(0.5, 0.5, 25.0), 50.0)
print(total_distance(0.1, 0.1, 6.0), 12.0)
print(total_distance(0.05, 0.1, 1.1), 3.3)
print(total_distance(1.0, 1.0, 777.0), 1554.0)
print(total_distance(0.2, 0.1, 100.6), 150.9)
