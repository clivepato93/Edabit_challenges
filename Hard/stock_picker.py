# https://edabit.com/challenge/DqLngKnnJcZyPMctn

def stock_picker(l):
    a=[]
    for n in range(0,len(l)-1):
        for i in range(n,len(l)):
            a.append(l[i]-l[n])
    return max(a) if max(a) else -1
    # return sum(l[i]>l[i-1] for i in range(1,len(l)))


print(stock_picker([90, 100, 111, 0, 1, 2, 3]), 21)
print(stock_picker([1, 2, 4, 10, 100, 2, 3]), 99)
print(stock_picker([10, 1000, 1, 1, 1, 2000, 3]), 1999)
print(stock_picker([7, 1, 5, 5, 2, 1, 3]), 4)
print(stock_picker([100, 10, 8, 5]), -1)
