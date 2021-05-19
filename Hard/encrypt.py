# https://edabit.com/challenge/JzBLDzrcGCzDjkk5n

def encrypt(word):
    rc={"a":"0",
        "e":"1",
        "i":"2",
        "o":"2",
        "u":"3"}
    w=[rc[i] if i in rc else i for i in word[::-1]]
    return "".join(w)+"aca"

print(encrypt("karaca"), "0c0r0kaca")
print(encrypt("burak"), "k0r3baca")
print(encrypt("banana"), "0n0n0baca")
print(encrypt("alpaca"), "0c0pl0aca")
print(encrypt("hello"), "2ll1haca")
