# https://edabit.com/challenge/ZDSrKXGH4dG9M4iuP

def string_pairs(s):
    c= [s[i]+s[i+1] for i in range(0,len(s)-1,2)]
    if len(s)%2==1:
        c.append(s[len(s)-1]+"*")
    return c

def string_pairs(s):
    return [s[i]+s[i+1] if len(s)%2==0 else s[-1]+"*" for i in range(0,len(s)-1,2)]

print(string_pairs("abcdef"), ["ab", "cd", "ef"])
print(string_pairs("abcdefg"), ["ab", "cd", "ef", "g*"])
