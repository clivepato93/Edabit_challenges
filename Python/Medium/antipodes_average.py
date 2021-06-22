
# https://edabit.com/challenge/oF8T7Apf7jfagC4fD

def antipodes_average(l):
    a=l[:len(l)//2]
    b=l[:len(l)//2-1+len(l)%2:-1]
    return [sum(i)/2.0 for i in list(zip(a,b))]


print(antipodes_average([1, 2, 3, 4]), [2.5, 2.5], "Example #1")
print(antipodes_average([1, 2, 3, 4, 5]), [3, 3], "Example #2")
print(antipodes_average([-1, -2]), [-1.5], "Example #3")
print(antipodes_average([1, 2, 5, 10]), [5.5, 3.5])
print(antipodes_average([1, 2, 3, 5, 7, 9]), [5, 4.5, 4])
print(antipodes_average([-1, -4, -12, -2, -11, -6]), [-3.5, -7.5, -7])
print(antipodes_average([5, -80, 66, -8, -6]), [-0.5, -44])
print(antipodes_average([-1, 0, 1]), [0])
