# https://edabit.com/challenge/McZF4JRhPus5DtRA4
'''
Transcribe the given DNA strand into corresponding mRNA - a type of RNA,
that will be formed from it after transcription. DNA has the bases A, T, G and C,
while RNA converts to U, A, C and G respectively.
'''
def dna_to_rna(dna):
    rna=""
    for letter in dna:
        if letter == "A":
            rna+= "U"
        if letter == "T":
            rna+= "A"
        if letter == "G":
            rna+= "C"
        if letter == "C":
            rna+= "G"
    return rna

def dna_to_rna(dna):
    rna_dict={"A":"U",
              "T":"A",
              "G":"C",
              "C":"G"}
    rna=""
    for letter in dna:
        rna+=rna_dict[letter]
    return rna
    # return dna.replace("A","U").replace("T","A").replace('G','C').replace("C","G")


print(dna_to_rna("GCGTAC"), "CGCAUG")
print(dna_to_rna("ATTAGCGCGATATACGCGTAC"), "UAAUCGCGCUAUAUGCGCAUG")
print(dna_to_rna("CAGTATGCTGCAT"), "GUCAUACGACGUA")
print(dna_to_rna("CGATATA"), "GCUAUAU")
print(dna_to_rna("GCAGCTACA"), "CGUCGAUGU")
