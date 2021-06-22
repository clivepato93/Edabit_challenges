# https://edabit.com/challenge/KcD3bABvuryCfZAYv

def most_frequent_char(lst):
    s=[]
    t="".join(lst)
    for i in t:
        if i not in s:
            s.append((t.count(i),i))
    x= max(s,key= lambda i:i[0])
    f=[]
    for a,b in s:
        if b not in f and a==x[0]:
            f.append(b)
    return sorted(f)
    # return [b for a,b in s if a==x[0]]

print(most_frequent_char(["apple", "bandage", "yodel", "make"]), ['a', 'e'])
print(most_frequent_char(["music", "madness", "maniac", "motion"]), ['m'])
print(most_frequent_char(["the", "hills", "are", "alive", "with", "the", "sound", "of", "music"]), ['e', 'h', 'i'])
print(most_frequent_char(["let", "them", "eat", "cake"]), ['e'])
print(most_frequent_char(["potion", "master", "professor", "snape"]), ['o', 's'])
