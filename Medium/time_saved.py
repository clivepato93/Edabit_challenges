# https://edabit.com/challenge/QgSMSMpfcEebAyCye
def time_saved(s_lim, s_avg, d):
    return round(float(d)/s_lim*60-float(d)/s_avg*60,1)

print(time_saved(80, 90, 40), 3.3)
print(time_saved(80, 90, 4000), 333.3)
print(time_saved(80, 100, 40), 6.0)
print(time_saved(80, 100, 10), 1.5)
print(time_saved(60, 65, 25), 1.9)
