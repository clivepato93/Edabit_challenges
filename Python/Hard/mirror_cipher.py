# https://edabit.com/challenge/auLEvdvBT5PRnALvn
import string
def mirror_cipher(message,key=string.ascii_lowercase):
    message=message.lower()
    return ''.join([key[-key.find(i)-1] if i in key else i for i in message])


print(mirror_cipher("Mubashir Hassan", "edabitisamazing"), "tuzishar hissid")
print(mirror_cipher("Matt MacPherson"), "nzgg nzxksvihlm")
print(mirror_cipher("Airforce is best", "pilot"), "aorfirce os besp")
print(mirror_cipher("hello"), "svool")
print(mirror_cipher("goodbye"), "tllwybv")
print(mirror_cipher("ngmlsoor"), "mtnohlli")
print(mirror_cipher("gsrh rh z hvxivg"), "this is a secret")
print(mirror_cipher("hello", "abcdefgh"), "adllo")
print(mirror_cipher("goodbye", ""), "goodbye")
print(mirror_cipher("this is a secret", " *"), "this*is*a*secret")
# Mubashir
