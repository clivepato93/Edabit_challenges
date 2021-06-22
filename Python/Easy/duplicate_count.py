# https://edabit.com/challenge/GrPXERNbrjyCmHPDg
def duplicate_count(txt):
    return 0 if len(set(txt))==len(txt) else sum(1 for i in set(txt) if txt.count(i)>1)

def duplicate_count(txt):
    c=0
    for i in set(txt):
        if txt.count(i)>1:
            c+=1
    return c

print(duplicate_count("abcde"), 0)
print(duplicate_count("Aa"), 0, "Duplicate characters are case sensitive.")
print(duplicate_count("aabbcde"), 2)
print(duplicate_count("aabbcdeB"), 2)
print(duplicate_count("indivisibility"), 1)
print(duplicate_count("Indivisibilities"), 2)
print(duplicate_count("aa1112"), 2)
print(duplicate_count("bb2c"), 1)
