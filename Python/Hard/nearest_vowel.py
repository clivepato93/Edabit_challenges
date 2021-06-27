import string
# def nearest_vowel(s):
#     stri=string.ascii_lowercase
#     lower_v=[s,0]
#     higher_v=[s,0]
#     if s =="a":
#         return s
#     elif s=='z':
#         return 'u'
#     while lower_v[0] not in 'aeiou':
#         lower_v[0]=stri[stri.index(lower_v[0])-1]
#         lower_v[1]+=1
#     while higher_v[0] not in 'aeiou':
#         higher_v[0]=stri[stri.index(higher_v[0])+1]
#         higher_v[1]+=1
#     return min(lower_v,higher_v,key=lambda i:i[1])[0]

def nearest_vowel(s):
    v_check={'abc':'a','defg':'e','hijkl':'i','mnopqr':'o','stuvwxyz':'u'}
    for k in v_check.keys():
        if s in k:
            return v_check[k]

# print(nearest_vowel("a"), "a")
# print(nearest_vowel("b"), "a")
# print(nearest_vowel("c"), "a")
# print(nearest_vowel("d"), "e")
# print(nearest_vowel("e"), "e")
# print(nearest_vowel("f"), "e")
# print(nearest_vowel("g"), "e")
# print(nearest_vowel("h"), "i")
print(nearest_vowel("z"), "u")
