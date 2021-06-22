def holey_sort(lst):
    a={"4":1,"6":1,"8":2,"0":1,"9":1}
    f=[]
    for i in lst:
        f.append((i,sum(a.get(l,0) for l in str(i))))
    return [a for a,b in sorted(f,key= lambda i:(i[1],lst.index(i[0])))]

print(holey_sort([44, 4, 444, 4444]), [4, 44, 444, 4444])
print(holey_sort([100, 888, 1660, 11]), [11, 100, 1660, 888])
# print(holey_sort([8, 121, 41, 66]), [121, 41, 8, 66])
# print(holey_sort([8866609, 7446374, 8034913, 8192048]), [7446374, 8034913, 8192048, 8866609])
print(holey_sort([3679331, 1237297, 7317174, 5541133, 2319810, 2012006, 4559290, 3135855, 5095791]), [1237297, 7317174, 5541133, 3679331, 3135855, 5095791, 2319810, 2012006, 4559290])
# print(holey_sort([5680732, 6544345]), [5680732, 6544345])

# https://edabit.com/challenge/fsNMnyjMkErQtvpMW
