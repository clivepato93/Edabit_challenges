

def mubashir_cipher(message):
    l=""
    key= [['m', 'c'], ['u', 'e'], ['b', 'g'], ['a', 'k'], ['s', 'v'],
        ['h', 'x'],['i', 'z'], ['r', 'y'], ['p', 'w'], ['l', 'n'],
        ['o', 'j'], ['t', 'f'], ['q', 'd']]
    for i in message:
        for n in key:
            try:
                l+=n[n.index(i)-1]
            except:
                continue
    return l

print(mubashir_cipher("mubashir is not amazing"), "cegkvxzy zv ljf kckizlb")
print(mubashir_cipher("cegkvxzy zv ljf kckizlb"), "mubashir is not amazing")
print(mubashir_cipher("edabit is amazing !"), "uqkgzf zv kckizlb !")
print(mubashir_cipher("%$ &%"), "%$ &%")
print(mubashir_cipher("~!@#$%^&*()_+= -0 98 76 54 3 2 1"), "~!@#$%^&*()_+= -0 98 76 54 3 2 1")
print(mubashir_cipher("matt && is amazing"), "ckff && zv kckizlb")
print(mubashir_cipher("evgeny sh is amazing"), "usbulr vx zv kckizlb")
print(mubashir_cipher("usbulr vx zv kckizlb"), "evgeny sh is amazing")
print(mubashir_cipher("airforce needs me ?"), "kzytjymu luuqv cu ?")
print(mubashir_cipher("pakistan is love !"), "wkazvfkl zv njsu !")
# Mubashir
