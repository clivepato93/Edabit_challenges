# https://edabit.com/challenge/FjiriGn8gc5RE8Xm2
def total_distance(f, fu, p, a):
    if p>0 and a:
        c=(fu+(fu/(100/(p*5))))
        return round(f/(c*0.1+c)*100,1)
    elif not p and not a:
        return round(f/fu*100,1)
    elif not p and a:
        return round(f/fu*100,1)

    return round(f/(fu/(100/(p*5))+fu)*100,1)
# print(total_distance(30.0, 3.0, 0, False), 1000.0)
print(total_distance(50.0, 7.0, 3, True), 564.7)
# print(total_distance(36.1, 8.6, 3, True), 331.8)
# print(total_distance(71.9, 12.1, 1, False), 565.9)
# print(total_distance(11.0, 11.0, 0, False), 100.0)
# print(total_distance(55.5, 5.5, 5, False), 807.3)
# print(total_distance(300.0, 25.0, 11, True), 703.8)
