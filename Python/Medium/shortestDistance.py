import math
def shortestDistance(txt):
    t=[int(i) for i in txt.split(",")]
    return round(math.sqrt((t[0]-t[2])**2+(t[1]-t[3])**2),2)

print(shortestDistance('1,1,2,1'), 1)
print(shortestDistance('1,1,3,1'), 2)
print(shortestDistance('-5,1,3,1'), 8)
print(shortestDistance('-5,2,3,1'), 8.06)

print(shortestDistance('18174,773931,851747,490653'), 880392.17)
print(shortestDistance('737017,82252,882429,883228'), 814068.3)
