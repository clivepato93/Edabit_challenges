# https://edabit.com/challenge/LdXYzf5d3xJgYZur8
def longest_time(h, m, s):
    converted_times={h:3600*h,m:m*60,s:s}
    return max(converted_times,key=converted_times.get)


print(longest_time(1, 59, 3598), 1)
print(longest_time(23, 0, 2000), 23)
print(longest_time(1, 65, 40), 65)
print(longest_time(0, 500, 4000), 500)
#
print(longest_time(5, 233, 9999999), 9999999)
print(longest_time(2, 955, 59400), 59400)
