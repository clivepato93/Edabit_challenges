# https://edabit.com/challenge/uwFHSRewNpmBNvbME

def same_vowel_group(w):
    n=[w[0]]
    l=sorted([i for i in w[0] if i in "aieou"])
    for i in w[1:]:
        if sorted(set(l)) ==sorted(o for o in set(i) if o in "aieou"):
            n.append(i)
    return n

def same_vowel_group(w):
    l=[]
    v="aieou"
    c=set(i for i in w[0] if i in v)
    for word in w:
        if c==set(i for i in word if i in v):
            l.append(word)
    return l
    # n=[w[0]]
    # l=sorted([i for i in w[0] if i in "aieou"])
    # return l==sorted(i for i in set(w[-1]) )

print(same_vowel_group(["hoops", "chuff", "bot", "bottom"]),
["hoops", "bot", "bottom"])
# print(same_vowel_group(["crop", "nomnom", "bolo", "yodeller"]),
# ["crop", "nomnom", "bolo"])
# print(same_vowel_group(["semantic", "aimless", "beautiful", "meatless icecream"]),
# ["semantic", "aimless", "meatless icecream"])
# print(same_vowel_group(["many", "carriage", "emit", "apricot", "animal"]),
# ["many"])
# print(same_vowel_group(["toe", "ocelot", "maniac"]), ["toe", "ocelot"])
# print(same_vowel_group(["a", "apple", "flat", "map", "shark"]), ["a", "flat", "map", "shark"])
# print(same_vowel_group(["a", "aa", "ab", "abc", "aaac", "abe"]), ["a", "aa", "ab", "abc", "aaac"])
