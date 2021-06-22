# https://edabit.com/challenge/28aPKtEcWJPMwb9mm

def modify(txt):
    return int(bin(int(''.join(str(ord(i)-97+1) for i in reversed(txt))))[2:])


print(modify("hello"), 111001101011101101101010)
# print(modify("mubashir"), 10110000110010000110011111000111000001)
# print(modify("edabit"), 111111110110001110001)
# print(modify("airforce"), 110001100001110111100011110000100011)
# print(modify("pakistan"), 10100100011000010111100011111100111001100)
#Mubashir
