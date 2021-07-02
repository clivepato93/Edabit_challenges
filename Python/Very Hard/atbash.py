# https://edabit.com/challenge/MGALfBAXhXqqdFyqo
import string
def atbash(txt):
    a=string.ascii_lowercase
    b=string.ascii_uppercase
    f=''
    for i in txt:
        if i in a:
            f+=a[-a.index(i)-1]
        elif i in b:
            f+=b[-b.index(i)-1]
        else:
            f+=i
    return f

print(atbash("abcdefghijklmnopqrstuvwxyz"), "zyxwvutsrqponmlkjihgfedcba")
print(atbash("ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "ZYXWVUTSRQPONMLKJIHGFEDCBA")
print(atbash("The word 'atbash' derives from the the first and last 2 letters of the Hebrew alphabet."), "Gsv dliw 'zgyzhs' wvirevh uiln gsv gsv urihg zmw ozhg 2 ovggvih lu gsv Svyivd zokszyvg.")
# print(atbash("Vmxibkgrlm zmw wvxibkgrlm ziv rwvmgrxzo uli gsv Zgyzhs xrksvi."),"Encryption and decryption are identical for the Atbash cipher.")
