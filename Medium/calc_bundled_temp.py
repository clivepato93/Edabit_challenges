# https://edabit.com/challenge/qKAcMAkWXvXKAxXut
def calc_bundled_temp(n, temp):
    tem,celcius=int(temp[:-2]),temp[-2:]
    # increase=0.1*tem
    for number in range(1,n+1):
        tem*=1.1
    return "{}{}".format(round(tem,1),celcius)


print(calc_bundled_temp(2, "10*C"), "12.1*C")
print(calc_bundled_temp(1, "2*C"), "2.2*C")
print(calc_bundled_temp(4, "6*C"), "8.8*C")
print(calc_bundled_temp(20, "4*C"), "26.9*C")
print(calc_bundled_temp(5, "20*C"), "32.2*C")
# print(calc_bundled_temp(20, "3*C"), "20.2*C")
# print(calc_bundled_temp(5, "18*C"), "29.0*C")
# print(calc_bundled_temp(4, "5*C"), "7.3*C")
# print(calc_bundled_temp(16, "17*C"), "78.1*C")
# print(calc_bundled_temp(15, "2*C"), "8.4*C")
# print(calc_bundled_temp(14, "10*C"), "38.0*C")
