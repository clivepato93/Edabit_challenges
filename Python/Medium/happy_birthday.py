# https://edabit.com/challenge/Sdu9JRQtL45qXmJtr

def happy_birthday(age):
    return "Mubashir is just {}, in base {}!".format(str(2)+str(age%2),age//2)



print(happy_birthday(32), "Mubashir is just 20, in base 16!")
print(happy_birthday(39), "Mubashir is just 21, in base 19!")
print(happy_birthday(22), "Mubashir is just 20, in base 11!")
print(happy_birthday(65), "Mubashir is just 21, in base 32!")
print(happy_birthday(83), "Mubashir is just 21, in base 41!")
print(happy_birthday(95), "Mubashir is just 21, in base 47!")
print(happy_birthday(100), "Mubashir is just 20, in base 50!")
print(happy_birthday(120), "Mubashir is just 20, in base 60!")
print(happy_birthday(147), "Mubashir is just 21, in base 73!")
