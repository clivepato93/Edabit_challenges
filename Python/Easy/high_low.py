# https://edabit.com/challenge/K9w9hEd9Pn7DtMzjs
'''Create a function that accepts a string of space separated integers
and returns the highest and lowest integers (as a string).'''
def high_low(txt):
	lst = [int(i) for i in txt.split()]
	c= [str(max(lst)),str(min(lst))]
	return " ".join([str(max(lst)),str(min(lst))])

print(high_low("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214")
print(high_low("1 -1"), "1 -1")
print(high_low("1 1"), "1 1")
print(high_low("-1 -1"), "-1 -1")
print(high_low("1 -1 0"), "1 -1")
print(high_low("1 1 0"), "1 0")
print(high_low("-1 -1 0"), "0 -1")
print(high_low("42"), "42 42")
