# https://edabit.com/challenge/yKMxg88HGXmLhirht

def add_letters(a):
    if a:
        al=[chr(i) for i in range(96,123)]
        c=al.index(a[0])
        print(c)
        for l in a[1:]:
            if c+al.index(l)>26:
                c-=26
                c+=al.index(l)
            else:
                c+=al.index(l)
        return al[c]
    return "z"

print(add_letters(["a"]), "a")
print(add_letters(["a", "b"]), "c")
print(add_letters(["a", "b", "c"]), "f")
print(add_letters(["a", "b", "c", "d", "e", "f"]), "u")
print(add_letters(["y", "a"]), "z")
print(add_letters(["y", "c"]), "b")
print(add_letters(["z", "a"]), "a")
print(add_letters(["x", "y", "z"]), "w")
print(add_letters([]), "z")
