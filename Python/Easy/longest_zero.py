# https://edabit.com/challenge/KbFxyTPiP4GMvxw68

def longest_zero(s):
	return "" if "0" not in s else sorted(s.split("1"),key=len)[-1]



print(longest_zero("01100001011000"), "0000")
print(longest_zero("100100100"), "00")
print(longest_zero("111101"), "0")
print(longest_zero("1000000000011101"), "0000000000")
print(longest_zero("100001110000100000"), "00000")
print(longest_zero("101001101"), "00")
print(longest_zero("101010101"), "0")
print(longest_zero("1001001"), "00")
print(longest_zero("111111"), "")
