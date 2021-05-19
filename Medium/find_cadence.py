# https://edabit.com/challenge/eoSXSf4C3gTbNJJEr
def find_cadence(chords):
    c=chords[-2:]
    for i in range(len(c)-1):
        if c[i]=="IV" and c[i+1]=="V":
            return "imperfect"
        elif c[i]=="V" and c[i+1]=="I":
            return "perfect"
        elif c[i]=="V" and c[i+1]=="vi" or c[i+1]=="IV":
            return "interrupted"
        elif c[i]=="IV" and c[i+1]=="I":
            return "plagal"
        return "no cadence"

print(find_cadence(["I", "IV", "V"]), "imperfect")
print(find_cadence(["ii", "V", "I"]), "perfect")
print(find_cadence(["I", "IV", "I", "V", "vi"]), "interrupted")
print(find_cadence(["I", "IV", "I", "V", "IV"]), "interrupted")
print(find_cadence(["I", "III", "IV", "V"]), "imperfect")
print(find_cadence(["I", "IV", "I"]), "plagal")
print(find_cadence(["V", "IV", "I"]), "plagal")
print(find_cadence(["V", "IV", "V", "I"]), "perfect")
print(find_cadence(["V", "IV", "V", "I", "vi"]), "no cadence")
print(find_cadence(["V", "IV", "V", "III", "vi"]), "no cadence")
