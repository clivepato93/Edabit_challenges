# https://edabit.com/challenge/dQZmkrPaKdtSat5f9

# orginal solution
def single_occurrence(txt):
    txt=txt.upper()
    if txt:
        for i in txt:
            if txt.count(i.upper())==1:
                return i
    return txt

# new solution
def single_occurrence(txt):
    return [i for i in sorted(set(txt.upper())) if txt.upper().count(i)==1][0] if txt else ""

print(single_occurrence("EFFEAABbc"), "C")
print(single_occurrence("AAAAVNNNNSS"), "V")
print(single_occurrence("S"), "S")
print(single_occurrence(""), "")
print(single_occurrence("eEDABITaebiT"), "D")
print(single_occurrence("iSs"), "I")
print(single_occurrence("GOODd"), "G")
