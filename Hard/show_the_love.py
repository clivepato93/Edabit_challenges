# https://edabit.com/challenge/pqpkRBP4YT5dwBDHm

def show_the_love(lst):
    a=lst.index(min(lst))
    z=0
    for i in range(len(lst)):
        if lst[i] != min(lst):
            z+=lst[i]-(lst[i]*0.75)
            lst[i]=(lst[i]*0.75)
            # print(z)
    lst[a]+=z
    return lst


print(show_the_love([4, 1, 4]), [3, 3, 3,])
print(show_the_love([16, 10, 8]), [12, 7.5, 14.5])
print(show_the_love([2, 100]), [27, 75])
