# https://edabit.com/challenge/sDvjdcBrbHoXKvDsZ


def anagram(name, words):
    name=sorted(i for i in ''.join(name.lower()) if i !=" ")
    words=sorted(i for i in ''.join(words).lower())
    return words==name

print(anagram("Justin Bieber", ["injures", "ebb", "it"]), True)
print(anagram("Natalie Portman", ["ornamental", "pita"]), True)
print(anagram("Emma Watson", ["mows", "meant", "a"]), True)
print(anagram("Daniel Radcliffe", ["clarified", "elf", "and"]), True)
print(anagram("Tom Hiddleston", ["tenths", "mood", "lid"]), True)
print(anagram("Blake Lively", ["key", "veal", "bill"]), True)
print(anagram("Ryan Reynolds", ["yonder", "sly", "ran"]), True)
print(anagram("Kristen Stewart", ["trinkets", "war", "set"]), True)
print(anagram("Chris Pratt", ["chirps", "rat"]), False)
