# https://edabit.com/challenge/oK2e5Xet35ZFZNLX6
def neighboring(txt):
    txt=[ord(i) for i in txt]
    return all(txt[i-1]-1==txt[i] or txt[i-1]+1==txt[i] for i in range(1,len(txt)))

print(neighboring("abcdedcba"), True)
print(neighboring("aba"), True)
print(neighboring("efghihfe"), False)
print(neighboring("xyzyx"), True)
print(neighboring("mnopqrstsrqponm"), True)
print(neighboring("zyz"), True)
print(neighboring("aeiou"), False)
print(neighboring("cdefg"), True)
print(neighboring("qrstuv"), True)
print(neighboring("aaaaa"), False)
