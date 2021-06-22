# https://edabit.com/challenge/tjMNAEgkNvM5eyEqJ
def unique_abbrev(abbs, words):
    c=0
    b=0
    for ab in abbs:
        for word in words:
            if word.startswith(abbs[b]):
                c+=1
        b+=1
    return c==len(words)


print(unique_abbrev(["s", "t", "v"], ["stamina", "television", "vindaloo"]), True)
print(unique_abbrev(["mo", "ma", "me"], ["moment", "many", "mean"]), True)
print(unique_abbrev(["at", "o", "abe"], ["atom", "original", "abet"]), True)
print(unique_abbrev(["rh", "par", "re"], ["rhino", "parry", "residue"]), True)
print(unique_abbrev(["ho", "h", "ha"], ["house", "hope", "happy"]), False)
print(unique_abbrev(["bi", "ba", "bat"], ["big", "bard", "battery"]), False)
print(unique_abbrev(["b", "c", "ch"], ["broth", "chap", "cardigan"]), False)
print(unique_abbrev(["to", "too", "t"], ["topology", "took", "torrent"]), False)
