# https://edabit.com/challenge/6LjNTxQb6gtbS77FD
def noddy_function(s):
	return True if "d" not in s and "D" not in s else False


print(noddy_function("fantastic"), True)
print(noddy_function("wonderful"), False)
print(noddy_function("noddy"), False)
print(noddy_function("blessed"), False)
print(noddy_function("Wonder"), False)
print(noddy_function("waterfall"), True)
print(noddy_function("nature"), True)
print(noddy_function("ADVENTUROUS"), False)
print(noddy_function("Benevolent"), True)
print(noddy_function("courageous"), True)
print(noddy_function("End"), False)
print(noddy_function("virtue"), True)
print(noddy_function("Kindness"), False)
print(noddy_function("CREATURE"), True)
print(noddy_function("Planet"), True)
print(noddy_function("disaster"), False)
print(noddy_function("possibility"), True)
print(noddy_function("Inspiration"), True)
print(noddy_function("Hope"), True)
print(noddy_function("nurture"), True)
print(noddy_function("UNDERSTANDING"), False)
print(noddy_function("Edabit"), False)
