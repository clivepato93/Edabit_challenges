# https://edabit.com/challenge/fmQ9QvPBWL7N9hSkq
def unstretch(w):
    f=""
    for i in range(1,len(w)):
        if w[i-1]!=w[i]:
            f+=w[i]
    return w[0]+f


print(unstretch('llossttttt'), 'lost')
print(unstretch('cccccaaaaannnnne'), 'cane')
print(unstretch('hhoooneestttt'), 'honest')
print(unstretch('ppppooowwddddeeerrrr'), 'powder')
print(unstretch('eexxpppppeeccctt'), 'expect')
print(unstretch('rrrrepooooorrttt'), 'report')
print(unstretch('pppaaaaattteeeennnntt'), 'patent')
print(unstretch('mmmeeemoooryy'), 'memory')
print(unstretch('vvvvviiiiisssuuaaalll'), 'visual')
print(unstretch('eeeennnnsuuurrre'), 'ensure')
print(unstretch('iiinncclludddddeee'), 'include')
print(unstretch('ttteestiffffyyy'), 'testify')
print(unstretch('ggrrrrraaaaavvvvviiitttyyyy'), 'gravity')
print(unstretch('cccuuuultttttuuuuurreee'), 'culture')
print(unstretch('qquaalliiifffyy'), 'qualify')
print(unstretch('iiinnccoooonnnnnggggrrrrruuuuooouuuuusss'), 'incongruous')
print(unstretch('eeeennnnttiiiitlllleeeeemmeennnttttt'), 'entitlement')
print(unstretch('aaaaassstttttooniiiiissshhiiinnnnnggg'), 'astonishing')
print(unstretch('cccccoiinnnncccciidddenncee'), 'coincidence')
print(unstretch('prrrrreeeppppaaaarrrrraaattiionn'), 'preparation')
