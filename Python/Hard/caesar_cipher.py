# https://edabit.com/challenge/Es985FEDzEQ2tkM75

def caesar_cipher(text, key):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    return ''.join([alphabet[(alphabet.index(i)+key)%len(alphabet)] if i in alphabet else " " for i in text])


print(caesar_cipher("hello world", 1), "ifmmp xpsme")
print(caesar_cipher("hello world", 26), "hello world")
print(caesar_cipher("iwxh xh p rwxetg", 11), "this is a chiper")
print(caesar_cipher("z", 2), "b")
print(caesar_cipher("fruuhfw", 23), "correct")
print(caesar_cipher("tfexirkj", 9), "congrats")
