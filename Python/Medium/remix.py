def remix(txt,lst):
    def i(n):
        return n[1]
    l=[(a,b) for a,b in list(zip(txt,lst))]
    l=sorted(l,key=i)
    return "".join([a[0] for a in l])



print(remix("abcd", [0, 3, 1, 2]), "acdb")
print(remix("PlOt", [1, 3, 0, 2]), "OPtl")
print(remix("computer", [0, 2, 1, 5, 3, 6, 7, 4]), "cmourpte")
print(remix("twist", [4, 0, 1, 2, 3]), "wistt")
print(remix("responsibility", [0, 6, 8, 11, 10, 7, 13, 5, 3, 2, 4, 12, 1, 9]), "rtibliensyopis")
print(remix("Interference", [6, 9, 10, 11, 7, 3, 0, 2, 5, 1, 8, 4]), "enrfeeIrcnte")
print(remix("sequence", [5, 7, 3, 4, 0, 1, 2, 6]), "encqusee")
# https://edabit.com/challenge/EPXH424t2SSjMzms5
