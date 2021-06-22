# https://edabit.com/challenge/x3pW72MfFLi2GYh6g
def is_scalable(lst):
    return all(abs(a-b)<=5 for a,b in list(zip(lst[:],lst[1:])))


print(is_scalable([1, 2, 4, 6, 7, 8]), True)
print(is_scalable([40, 45, 50, 48, 47, 52]), True)
print(is_scalable([2, 9, 11, 10, 18, 21]), False)
print(is_scalable([200, 200, 200, 200]), True)
print(is_scalable([30, 29, 24, 19, 16, 11]), True)
print(is_scalable([22, 22, 22, 29, 29, 29, 29]), False)
