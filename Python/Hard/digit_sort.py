# https://edabit.com/challenge/jTBQTDQ568ppnGvq7
def digit_sort(lst):
    lst = sorted(lst,key=lambda i:(len(str(i)),i),reverse=True)
    for i in range(0,len(lst)):
        for x in range(i+1,len(lst)):
            if len(str(lst[i]))==len(str(lst[x])) and lst[i]>lst[x]:
                lst[i],lst[x]=lst[x],lst[i]
    return lst
print(digit_sort([77, 23, 5, 7, 101]), [101, 23, 77, 5, 7])
print(digit_sort([1, 5, 9, 2, 789, 563, 444]), [444, 563, 789, 1, 2, 5, 9])
print(digit_sort([53219, 3772, 564, 32, 1]), [53219, 3772, 564, 32, 1])
print(digit_sort([9, 667, 87, 56, 3023, 5555, 111]), [3023, 5555, 111, 667, 56, 87, 9])
