# https://edabit.com/challenge/pyDemMDspSSFdWsh4
import string
def digital_decipher(eMessage, key):
    stringy=string.ascii_lowercase
    key=str(key)
    # print(stringy)
    return ''.join([stringy[eMessage[i]-int(key[i%len(key)])-1] for i in range(len(eMessage))])


print(digital_decipher([20, 12, 18, 30, 21], 1939), "scout")
print(digital_decipher([14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8], 1939), "masterpiece")
print(digital_decipher([15, 17, 14, 17, 19, 7, 21, 7, 2, 20, 20], 12),"nomoretears" )
print(digital_decipher([14, 30, 11, 1, 20, 17, 18, 18], 1990), "mubashir")
print(digital_decipher([17, 10, 15, 16, 20, 29, 5, 21], 1947), "pakistan")
print(digital_decipher([17,10, 17, 14, 20, 29, 7, 19, 2, 18, 24, 11, 16, 27, 9, 10], 1965), "pakistanairforce")
print(digital_decipher([6, 4, 1, 3, 9, 20], 100), "edabit")

# Mubashir
