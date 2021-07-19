# https://edabit.com/challenge/8HxYSzxMyN9pJb23g

def split_n_cases(txt, n):
    if len(txt)/float(n)!=len(txt)//n:
        return ["Error"]
    return [txt[i:i+len(txt)//n] for i in range(0,len(txt),len(txt)//n)]


print(split_n_cases("Unscrupulous", 2), [ "Unscru", "pulous" ])
print(split_n_cases("Incomprehensible", 4), [ "Inco", "mpre", "hens", "ible" ])
print(split_n_cases("Evaluation", 10), [ "E", "v", "a", "l", "u", "a", "t", "i", "o", "n" ])
print(split_n_cases("Strengthened", 6), [ "St", "re", "ng", "th", "en", "ed" ])
print(split_n_cases("Fool's Errand", 20), [ "Error" ])
print(split_n_cases("Flavorless", 1), [ "Flavorless" ])
print(split_n_cases("Evolutionary Biology", 8), [ "Error" ])
print(split_n_cases("Indefatigable Defender", 2), [ "Indefatigab", "le Defender" ])
print(split_n_cases("Unimaginatively", 3), [ "Unima", "ginat", "ively" ])
print(split_n_cases("Peppered Moth", 6), [ "Error" ])
print(split_n_cases("Peppered Moth", 6013), [ "Error" ])
