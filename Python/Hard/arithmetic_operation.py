import operator

def arithmetic_operation(n):
    ops = { "+": operator.add,
        "-": operator.sub,
        "*":operator.mul,
        '/' : operator.truediv,
        '//' : operator.floordiv} # etc.
    s=n.split()
    if int(s[2])!=0 and (s[1] !="/" or s[1] !="//"):
        return ops[s[1]](int(s[0]),int(s[2]))
    return -1


print(arithmetic_operation("12 + 12"), 24)
print(arithmetic_operation("22 - 12"), 10)
print(arithmetic_operation("100 * 12"), 1200)
print(arithmetic_operation("120 // 10"), 12)
print(arithmetic_operation("122 // 0"), -1)
print(arithmetic_operation("10 * 20"), 200)
print(arithmetic_operation("10 - 10"), 0)
print(arithmetic_operation("10 - 12"), -2)
