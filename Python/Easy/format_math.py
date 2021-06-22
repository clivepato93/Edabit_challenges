def format_math(expr):
    expr1=expr.replace("x","*").replace("/","//")
    return expr+" = "+str(eval(expr1))

# print(format_math("3 + 4"), "3 + 4 = 7")
# print(format_math("3 - 2"), "3 - 2 = 1")
print(format_math("4 x 5"), "4 x 5 = 20")
print(format_math("6 / 3"), "6 / 3 = 2")
# print(format_math("9 / 3"), "9 / 3 = 3")
# print(format_math("21 / 3"), "21 / 3 = 7")
# print(format_math("24 / 3"), "24 / 3 = 8")
# print(eval("4 * 5"))


# https://edabit.com/challenge/3f2qF2CgM32zvQTwa
