
# https://edabit.com/challenge/EjjBGn7hkmhgxqJej
def word_nest(word, nest):
    return len(nest)/len(word)-1


print(word_nest("engagement", "engenengagemengagemeengagementntentgagementagement"), 4)
print(word_nest("passage", "passpassageage"), 1)
print(word_nest("factory", "ffacfactofactfafactoryctoryoryrytoryactory"), 5)
print(word_nest("deny", "ddededdddenyenyenyenynynyeny"), 6)
print(word_nest("jinx", "jijijjijjijijjinxinxnxnxinxnxinxnxnx"), 8)
print(word_nest("deal", "dedddealealealal"), 3)
print(word_nest("paradox", "parparaparadoxdoxadox"), 2)
print(word_nest("meet", "mmememmeeteeteteteet"), 4)
print(word_nest("last", "lalastst"), 1)
