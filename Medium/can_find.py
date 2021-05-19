# https://edabit.com/challenge/7QPHWACcDihT3AM6b

def can_find(b, words):
    words=" ".join(words)
    c=0
    for s in b:
        if s in words:
            c+=1
    return True if c >=len(b) else False

print(can_find(["at", "be", "th", "au"], ["beautiful", "the", "hat"]), True)
print(can_find(["bo", "ta", "el", "st", "ca"], ["books", "table", "cap", "hostel"]), True)
print(can_find(["la", "te"], ["latte"]), True)
print(can_find(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]), True)

print(can_find(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]), False)
print(can_find(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]), False)
print(can_find(["la"], []), False)
print(can_find(["la", "at", "te", "ea"], ["latte"]), False)
