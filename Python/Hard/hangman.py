def hangman(p, lst):
    s=['-']*len(p)
    c=p.lower()
    for i in range(0,len(lst)):
        if lst[i] in c:
            lst[i]=(lst[i],[l for l in range(0,len(p)) if c[l]==lst[i]])
    for r in lst:
        if r[0] in p or r[0].upper() in p:
            for n in r[1]:
                s[n]=r[0]
    for x in range(0,len(p)):
        if s[x].upper()==p[x]:
            s[x]=s[x].upper()
        if not p[x].isalpha():
            s[x]=p[x]
    return ''.join(s)


print(hangman("Looney Tunes", ["a", "e", "i", "o", "u"]), "-oo-e- -u-e-")
print(hangman("summer", ["f", "l", "i"]), "------")
print(hangman("Connect-4", ["c", "e", "e"]), "C---ec--4")
print(hangman("thE elePhaNt IN the rOom.", ["o", "g", "g", "m", "h","n","p"]), "-h- ---Ph-N- -N -h- -Oom.")
print(hangman("deoxyribonucleic acid", []), "---------------- ----")
print(hangman("IM YELLING!", ["m", "y", "i", "l", "g"]), "IM Y-LLI-G!")
print(hangman("Show me the money", ["a", "f", "u", "r", "q"]), "---- -- --- -----")
print(hangman("peter pan", ["e", "r", "p", "n", "n", "a", "t"]), "peter pan")
