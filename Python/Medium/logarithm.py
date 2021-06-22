# https://edabit.com/challenge/o7LPd9dAE5x9k7zFj


def logarithm(b, n):
    if b<2 or n<2:
        return "Invalid"
    v=1
    o=b
    while b!=n:
        b*=o
        v+=1
    return v

print(logarithm(1,	len("Hi,")), "Invalid")
print(logarithm(0,	len("How")), "Invalid")
print(logarithm(-1,len("Are")), "Invalid")
print(logarithm(len("you"), 0), "Invalid")
print(logarithm(len("doing"), -1), "Invalid")
print(logarithm(7, 49), 2)
print(logarithm(12, 144), 2)
print(logarithm(2, 4), 2)
print(logarithm(7, 49), 2)
print(logarithm(5, 9765625), 10)
