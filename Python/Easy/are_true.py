# https://edabit.com/challenge/3ex9eCDEBqdxvfQvD

def are_true(a, b):
	return "both" if a == True and b == True else 'first' if a == True and b == False else "second" if a == False and b == True else 'neither'

# original code

# def are_true(a, b):
# 	if a == True:
# 		if b == True:
# 			return "both"
# 		else:
# 			return "first"
# 	elif b = True:
# 		return "second"
# 	else:
# 		return "neither"


print(are_true(True, True), "both")
print(are_true(True, False), "first")
print(are_true(False, True), "second")
print(are_true(False, False),'neither')
