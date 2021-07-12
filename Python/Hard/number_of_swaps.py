def number_of_swaps(lst):
    n=0
    for i in range(0,len(lst)-1):
        for x in range(i+1,len(lst)):
            if lst[i]>lst[x]:
                n+=1
                # lst[i],lst[x]=lst[x],lst[i]
    return n


print(number_of_swaps([3, 9, 7, 4]), 3)
print(number_of_swaps([5, 4, 3]), 3)
print(number_of_swaps([5, 4, 3, 2]), 6)
print(number_of_swaps([1, 2, 4, 3]), 1)
print(number_of_swaps([1, 2, 5, 4, 3]), 3)
print(number_of_swaps([1, 3, 4, 5]), 0)
print(number_of_swaps([1, 2]), 0)
