def operation(a, b, op):
    operations={"add":"+",
                "divide":"/",
                "multiply":"*",
                "subtract":"-"}
    # c=eval("{}{}{}".format(a,operations[op],b))
    try:
        return str(int(eval("{}{}{}".format(a,operations[op],b))))
    except ZeroDivisionError:
        return "undefined"

print(operation("1", "2", "add"), "3")
print(operation("1", "-20", "add"), "-19")
print(operation("9", "0", "divide"), "undefined")
print(operation("10", "10", "multiply"), "100")
print(operation("-10", "-10", "multiply"), "100")
print(operation("10", "10", "subtract"), "0")
print(operation("0", "0", "subtract"), "0")
print(operation("0", "1", "divide"), "0")
print(operation("0", "25415", "divide"), "0")
print(operation(operation("10", "10", "multiply"),operation("10","10","add"),"divide"), "5")


# https://edabit.com/challenge/aoN2XoAfQzPQeRNRt
