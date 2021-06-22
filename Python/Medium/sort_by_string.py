# https://edabit.com/challenge/hjZTbJNzKiSxTtbik

def sort_by_string(lst, txt):
    f=[]
    i=0
    while len(f)!=len(lst):
        for n in range(0,len(lst)):
            if lst[n].startswith(txt[i]):
                f.append(lst[n])
        i+=1
    return f


print(sort_by_string(["apple", "banana", "cherry", "date"], "dbca"),
["date", "banana", "cherry", "apple"])

print(sort_by_string(["small", "big", "medium"], "sazymtb"),
["small", "medium", "big"])

print(sort_by_string(["poof", "floof", "loop"], "flatp"),
["floof", "loop", "poof"])

print(sort_by_string(["yellow", "phone", "book"], "abcdpy"),
["book", "phone", "yellow"])
