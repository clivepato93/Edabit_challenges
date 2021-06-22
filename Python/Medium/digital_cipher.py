# https://edabit.com/challenge/WFmZesxp2GXQcT8PE
import string
def digital_cipher(message, key):
    lst=string.ascii_lowercase
    key=[int(i) for i in str(key)]
    n=0
    while len(key)!=len(message):
        key.append(key[n])
        n+=1
        if n==4:
            n=0
    return [lst.index(message[i])+1+key[i] for i in range(len(message))]

print(digital_cipher("scout", 1939), [20, 12, 18, 30, 21])
print(digital_cipher("masterpiece", 1939), [14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8])
print(digital_cipher("nomoretears", 12), [15, 17, 14, 17, 19, 7, 21, 7, 2, 20, 20])
print(digital_cipher("mubashir", 1990), [14, 30, 11, 1, 20, 17, 18, 18])
print(digital_cipher("pakistan", 1947), [17, 10, 15, 16, 20, 29, 5, 21])
print(digital_cipher("pakistanairforce", 1965), [17,10, 17, 14, 20, 29, 7, 19, 2, 18, 24, 11, 16, 27, 9, 10])
print(digital_cipher("edabit", 100), [6, 4, 1, 3, 9, 20])
# Mubashir
