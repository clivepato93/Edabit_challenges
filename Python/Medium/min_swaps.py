# https://edabit.com/challenge/AjZBGWyPaA7rXFhi6


def min_swaps(s1, s2):
	return sum(s1[i]!=s2[i] for i in range(0,len(s1)))/2


print(min_swaps("1001", "1001"), 0)
print(min_swaps("1100", "1001"), 1)
print(min_swaps("110011", "010111"), 1)
print(min_swaps("1100", "0011"), 2)
print(min_swaps("110011", "001111"), 2)
print(min_swaps("10011001", "01100101"), 3)
print(min_swaps("11111000001100", "10110010100110"), 3)
print(min_swaps("01100100100111", "10110010100110"), 3)
print(min_swaps("11110011001", "01100110111"), 3)
print(min_swaps("100110001", "010100110"), 3)
print(min_swaps("100101011", "011001101"), 3)
print(min_swaps("10011001", "01100110"), 4)
