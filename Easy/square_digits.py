# https://edabit.com/challenge/QiPr3M5tsqfsbYcCQ
def square_digits(n):
    c = list((str(n)))
    return int("".join([str((int(number))**2) for number in c]))

print(square_digits(9119), 811181)
