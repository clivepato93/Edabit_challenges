# https://edabit.com/challenge/gH3QMvF3czMDjENkk
def remove_letters(letters, word):
    f=[]
    for i in letters:
        if i in f:
            continue

        elif i not in word or letters.count(i)>word.count(i):
            f.append(i)
    return f

print(remove_letters(["s", "t", "r", "i", "n", "g", "w"], "string"), ["w"])
print(remove_letters(["b", "b", "l", "l", "g", "n", "o", "a", "w"], "balloon"), ["b", "g", "w"])
print(remove_letters(["d", "b", "t", "e", "a", "i"], "edabit"), [])
print(remove_letters(["t", "t", "e", "s", "t", "u"], "testing"), ["t", "u"])
