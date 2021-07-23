# https://edabit.com/challenge/94DMDTYe89i6TLCZh

def get_languages(num):
    d={"C#":1, "C++":2, "Java":4, "Javascript":8,
    "PHP":16, "Python":32, "Ruby":64, "Swift":128}
    lang=sorted(d,key=lambda i:d[i],reverse=True)
    # print(lang)
    finallst=[]
    for i in lang:
       if num>=(d[i]):
            c=(d[i])
            num-=c
            finallst.append(i)            
    return finallst

print(get_languages(32), ['Python'])
print(get_languages(25), ['C#','JavaScript','PHP'])
print(get_languages(100), ['Java','Python','Ruby'])
print(get_languages(255), ['C#','C++','Java','JavaScript','PHP','Python','Ruby','Swift'])
print(get_languages(53), ['C#','Java','PHP','Python'])
print(get_languages(12), ['Java','JavaScript'])

# print(((16|8)))
