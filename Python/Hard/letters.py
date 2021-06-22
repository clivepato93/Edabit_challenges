# https://edabit.com/challenge/GaJkMnuHLuPmXZK7h

def letters(word1, word2):
    s=["".join(sorted(set(word1).intersection(set(word2))))]
    f=""
    o=""
    for i in word1:
        if i not in word2:
            if i not in f:
                f+=i
    for i in word2:
        if i not in word1:
            if i not in o:
                o+=i

    return s+["".join(sorted(f))]+["".join(sorted(o))]



print(letters("sharp", "soap"), ["aps", "hr", "o"])
print(letters("board", "bored"), ["bdor", "a", "e"])
print(letters("happiness", "envelope"), ["enp", "ahis", "lov"])
print(letters("match", "ham"), ["ahm", "ct", ""])
print(letters("kerfuffle", "fluffy"), ["flu", "ekr", "y"])
