# https://edabit.com/challenge/zeHgBRuYyxp9TFry4

def can_form(lst):
    l=max(lst,key=len)
    return all(word.count(letter)<=l.count(letter) for word in lst for letter in word)


print(can_form(["mast", "manifest", "met", "fan"]), True)
print(can_form(["may", "master", "same", "reams"]), False)
print(can_form(["may", "same", "reams", "mastery"]), True)
print(can_form(["kerfuffle", "fluke", "fluff", "ruffle", ]), True)
print(can_form(["monument", "momento", "moment", "tome"]), False)
print(can_form(["shape", "shapers", "raps", "saps"]), True)