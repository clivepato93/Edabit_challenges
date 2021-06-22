# https://edabit.com/challenge/KYGpco9NFmJRyMQqj

def min_removals(txt1, txt2):
    t1=set(txt1)
    t2=set(txt2)
    return len(t1.symmetric_difference(t2))

def min_removals(txt1, txt2):
    maxi=txt2 if len(txt1)<len(txt2) else txt1
    mini=txt1 if maxi==txt2 else txt2
    c=0
    for i in mini:
        if i not in maxi:
            c+=1
    for i in maxi:
        if i not in mini:
            c+=1
    return mini,maxi,c



print(min_removals("aa", "a"), 1)
print(min_removals("abcde", "cab"), 2)
print(min_removals("deafk", "kfeap"), 2)
print(min_removals("abc", "ghi"), 6)
print(min_removals("abcxyz", "ghixytz"), 7)
