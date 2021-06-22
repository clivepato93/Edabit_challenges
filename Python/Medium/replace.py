# https://edabit.com/challenge/6pjjWy5ST2eMKtGkh
def replace(t, r):
    f=""
    ch=[chr(i) for i in range(ord(r[0]),ord(r[-1])+1)]
    for l in t:
        if l in ch:
            f+="#"
        else:
            f+=l
    return f

print(replace("abcdef", "c-e"), "ab###f")
print(replace("rattle", "r-z"), "#a##le")
print(replace("microscopic", "i-i"), "m#croscop#c")
print(replace("bountiful", "a-o"), "##u#t##u#")
print(replace("zebra", "a-z"), "#####")
print(replace("mount", "a-e"), "mount")
print(replace("", "a-z"), "")
