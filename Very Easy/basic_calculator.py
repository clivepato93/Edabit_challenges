def basic_calculator(a, o, b):
    result = 0
    if o == '+':
        result = a+b
    elif o == '-':
        result = a-b
    elif o == '*':
        result = a*b
    elif o == '/':
        try:
            result= a/b
        except ZeroDivisionError:
            result =None
    else:
        result = None
    return result


    # elif(o == "-"):
	# 	result = a - b
	# try:
    #         result = a / b
	# except ZeroDivisionError:
	# 		return None
	# if(o == "*"):
	# 		result = a * b
    #
    #
	# return result

print(basic_calculator(2, '+', 4), 6)
print(basic_calculator(12, '-', 6), 6)
print(basic_calculator(18, '/', 2), 9)
print(basic_calculator(6, '*', 4), 24)
print(basic_calculator(2, '/', 0), None)
print(basic_calculator(2, 'x', 4), None)
print(basic_calculator(2, 'o', 4), None)
print(basic_calculator(12, '-', 2), 10)
print(basic_calculator(17, '*', 2), 34)
