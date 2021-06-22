# https://edabit.com/challenge/LLJ2PoZ4ea5hyAeTp
import math
def DECIMATOR(txt):
    c=int(math.ceil(len(txt)/10.0))
    return txt[:-c]


print(DECIMATOR("1234567890"), "123456789")
print(DECIMATOR("1234567890AB"), "1234567890")
print(DECIMATOR("123"), "12")
print(DECIMATOR("123456789012345678901"), "123456789012345678")
print(DECIMATOR("ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "ABCDEFGHIJKLMNOPQRSTUVW")
print(DECIMATOR("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrst")
print(DECIMATOR("A"), "")
print(DECIMATOR(""), "")
