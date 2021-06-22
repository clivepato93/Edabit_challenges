# import math
def car_timer(n):
    return sum(int(v) for n in list(str(i) for i in (list(divmod(n, 60)))) for v in n)

print(car_timer(240), 4)
print(car_timer(808), 14)
print(car_timer(1439), 19)
print(car_timer(0), 0)
print(car_timer(23), 5)
print(car_timer(8), 8)
