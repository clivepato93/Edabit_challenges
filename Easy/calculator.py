# https://edabit.com/challenge/ZdnwC3PsXPQTdTiKf

def calculator(num1, operator, num2):
    try:
        return int(eval('num1'+operator+'num2'))
    except:
        return "Can't divide by 0!"


print(calculator(2, '/', 2), 1)
print(calculator(10, '-', 7), 3)
print(calculator(2, '*', 16), 32)
print(calculator(2, '-', 2), 0)
print(calculator(15, '+', 26), 41)
print(calculator(2, '+', 2), 4)
print(calculator(2, "/", 0), "Can't divide by 0!")
