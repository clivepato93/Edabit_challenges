
# https://edabit.com/challenge/KNcoiggMPCXcj3aML
def number_of_days(c):
    total=abs(sum(c))
    if str(total)[-1]=="5" or str(total)[-1]=="0":
        return total+(total-1)//5
    return total+total//5


print(number_of_days([10, 10]), 23)
print(number_of_days([3, 3]), 7)
print(number_of_days([-10, -9]), 22)
print(number_of_days([-1, -4]), 5)
print(number_of_days([-10, -2]), 14)
print(number_of_days([3, 30]), 39)
print(number_of_days([40, 1]), 49)
print(number_of_days([3, 5]), 9)
