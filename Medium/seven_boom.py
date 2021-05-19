# https://edabit.com/challenge/BokhFunYBvsvHEjfx
def seven_boom(lst):
    return "Boom!" if "7" in str(lst) else "there is no 7 in the list"

print(seven_boom([2, 6, 7, 9, 3]), "Boom!")
print(seven_boom([33, 68, 400, 5]), "there is no 7 in the list")
print(seven_boom([86, 48, 100, 66]), "there is no 7 in the list")
print(seven_boom([76, 55, 44, 32]), "Boom!")
print(seven_boom([35, 4, 9, 37]), "Boom!")
