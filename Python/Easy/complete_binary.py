# https://edabit.com/challenge/Jgeq7puc9mBBgr9SF
def complete_binary(s):
    if len(s)%8==0:
	       return s
    else:
        return '0'*abs((len(s)%8)-8)+s

print(complete_binary("1100"), "00001100")
print(complete_binary("1101100"), "01101100")
print(complete_binary("110010100010"), "0000110010100010")
