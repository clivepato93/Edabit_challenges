def power_of_two(num):
    return num in [2**i for i in range(num+1)]

def power_of_two(num):
    return num&num-1==0 and num!=0

print(power_of_two(32), True)
print(power_of_two(1), True)
print(power_of_two(18), False)
print(power_of_two(329), False)
