# https://edabit.com/challenge/Hs7YDjZALCEPRPD6Z
def count_uppercase(lst):
	return sum(letter.isupper() for word in lst for letter in word)


print(count_uppercase(["SOLO", "hello", "Tea", "wHat"]), 6)
print(count_uppercase(["little", "lower", "down"]), 0)
print(count_uppercase(["EDAbit", "Educate", "Coding"]), 5)
