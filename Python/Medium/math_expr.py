# https://edabit.com/challenge/hgjdb2nm4ZwuCjtHE
def math_expr(expr):
    try:
        c=int(eval(expr))
    except: return False
    return True


print(math_expr("5+4"), True)
print(math_expr("4 * 5"), True)
print(math_expr("3*6"), True)
print(math_expr("4 - 5"), True)
print(math_expr("6 % 7"), True)
print(math_expr("a - b"), False)
print(math_expr("a - 2"), False)
print(math_expr("nope"), False)
