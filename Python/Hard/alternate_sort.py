# https://edabit.com/challenge/iXabTtWEX8xegqFds

def alternate_sort(lst):
    lst1=sorted([l for l in lst if type(l)==str],key= lambda a:a.lower())
    lst2=sorted([l for l in lst if type(l)==int])
    f=[]
    for a,b in list(zip(lst1,lst2)):
        f.append(b)
        f.append(a)
    return f

print(alternate_sort([5, 1, "a", "c", 2, 1, 3, "c", "b", "e"]), [1, "a", 1, "b", 2, "c", 3, "c", 5, "e"])
print(alternate_sort([-2, "f", "A", 0, 100, "z"]), [-2, "A", 0, "f", 100, "z"])
print(alternate_sort(["a", "b", "c", 1, 2, 3]), [1, "a", 2, "b", 3, "c"])
print(alternate_sort(["e", "d", "a", "b", "i", "t", 1, 10, 100, 2, 20, 200]), [1, "a", 2, "b", 10, "d", 20, "e", 100, "i", 200, "t"])
print(alternate_sort(["X", 15, 12, 18, "Y", "Z"]), [12, "X", 15, "Y", 18, "Z"])
