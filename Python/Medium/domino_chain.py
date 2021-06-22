def domino_chain(do):
    s=""
    n="/"
    for i,v in enumerate(do):
        if v=="|" and n:
            s+=n
        else:
            n=None
        if not n:
            s+=v

    return s

def domino_chain(do):
    s=""
    n="/"
    for v in (do):
        if v=="|" and n:
            s+=n
        else:
            n=None
            s+=v

    return s
print(domino_chain("||| ||||//| |/"), "/// ||||//| |/")
print(domino_chain("|||||"), "/////")
print(domino_chain(" ///"), " ///")
print(domino_chain(""), "")
print(domino_chain(" "), " ")
print(domino_chain(" |"), " |")
print(domino_chain("||||| |||"), "///// |||")
print(domino_chain("|||||/|||"), "//////|||")
