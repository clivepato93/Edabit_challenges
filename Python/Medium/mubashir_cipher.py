# https://edabit.com/challenge/6CvfzetG9PNG9ANPu

def mubashir_cipher(m):
    l=""
    key= [['m', 'c'], ['u', 'e'], ['b', 'g'], ['a', 'k'], ['s', 'v'],
        ['h', 'x'],['i', 'z'], ['r', 'y'], ['p', 'w'], ['l', 'n'],
        ['o', 'j'], ['t', 'f'], ['q', 'd']]

    a="mubashirplotq"
    b="cegkvxzywnjfd"
    for i in m:
        if i in a:
            l+=b[a.index(i)]
        elif i in b:
            l+=a[b.index(i)]
        else:
            l+=i
    return l

    # return key.find()

print(mubashir_cipher("mubashir is not amazing"), "cegkvxzy zv ljf kckizlb")
print(mubashir_cipher("cegkvxzy zv ljf kckizlb"), "mubashir is not amazing")
# print(mubashir_cipher("edabit is amazing !"), "uqkgzf zv kckizlb !")
# print(mubashir_cipher("%$ &%"), "%$ &%")
# print(mubashir_cipher("~!@#$%^&*()_+= -0 98 76 54 3 2 1"), "~!@#$%^&*()_+= -0 98 76 54 3 2 1")
# print(mubashir_cipher("matt && is amazing"), "ckff && zv kckizlb")
# print(mubashir_cipher("evgeny sh is amazing"), "usbulr vx zv kckizlb")
# print(mubashir_cipher("usbulr vx zv kckizlb"), "evgeny sh is amazing")
# print(mubashir_cipher("airforce needs me ?"), "kzytjymu luuqv cu ?")
# print(mubashir_cipher("pakistan is love !"), "wkazvfkl zv njsu !")
# Mubashir
