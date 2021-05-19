# https://edabit.com/challenge/PxxZprxCjDrzaTcLQ
def vowel_links(txt):
    v="aeiou"
    txt=txt.split()
    end=[w[-1] for w in txt[::]]
    beg=[w[0] for w in txt[1::]]
    return any(a in v and b in v for a,b  in list(zip(end,beg)))



print(vowel_links("an open fire"), False)
print(vowel_links("the sudden applause"), False)
print(vowel_links("the large appliances"), True)
print(vowel_links("creative environment"), True)
print(vowel_links("beneficial luggage"), False)
print(vowel_links("the eagle swooped down low"), True)
print(vowel_links("this is not a drill"), False)
print(vowel_links("please log on to edabit"), True)
print(vowel_links("the quick brown fox was sad"), False)
