# https://edabit.com/challenge/8xLnFm4HW4bzJrqjc
def digit_distance(num1, num2):
    return sum([eval(b+"-"+a) for a,b in list(zip(str(num1),str(num2)))])


print(digit_distance(121, 599), 19)
print(digit_distance(12, 12), 0)
print(digit_distance(10, 20), 1)
print(digit_distance(12345678, 23456789), 8)
print(digit_distance(5555, 6666), 4)
print(digit_distance(105, 777), 15)
