# https://edabit.com/challenge/xzisrRDwWT8prHtiQ


def difference_two(lst):
    f=[]
    l=sorted(lst)
    for i in range(0,len(l)):
        for n in range(1,len(l)):
            f.append([l[i],l[n]])
    return [[a,b] for a,b in f if b-a==2]

print(difference_two([1, 2, 3, 4]),[[1,3], [2,4]])
print(difference_two([1, 23, 3, 4, 7]),[[1,3]])
print(difference_two([4, 3, 1, 5, 6]),[[1,3], [3, 5], [4, 6]])
