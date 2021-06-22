# https://edabit.com/challenge/9Kuah39g997SvZmex

def common_last_vowel(txt):
    v={"a":0,"i":0,"e":0,"o":0,"u":0}
    txt=[i[::-1] for i in  txt.lower().split()]
    for w in txt:
        for l in w:
            if l in v:
                v[l]+=1
                break
    return max(v.keys(), key= lambda k:v[k])


print(common_last_vowel("Hello World!"), "o")
# print(common_last_vowel("Watch the characters dance!"), "e")
# print(common_last_vowel("OOI UUI EEI AAI"), "i")
# print(common_last_vowel("amy and acts"), "a")
# print(common_last_vowel("munch munch munch tasty tasty brunch"), "u")
