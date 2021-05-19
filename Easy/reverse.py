# https://edabit.com/challenge/9hQogtkbZSSJ8tYsG
def reverse(txt):
	return txt.swapcase()[::-1]

print(reverse("Hello World"), "DLROw OLLEh")
print(reverse("ReVeRsE"), "eSrEvEr")
print(reverse(""), "")
print(reverse("Radar"), "RADAr")
