def stupid_addition(a, b):
    if type(a) != type(b):
        return None
    elif isinstance(a,str) and isinstance(b,str):
        return eval(a+"+"+b)
    return str(a)+str(b)

print(stupid_addition(1, 2), "12", "Both parameters are integers, therefore they should be concatenated")
print(stupid_addition("1", "2"), 3, "Both parameters are strings, therefore they should be added")
print(stupid_addition(1, "2"), None, "The parameters are different data types, therefore None should be returned")
print(stupid_addition("1", 2), None, "The parameters are different data types, therefore None should be returned")
