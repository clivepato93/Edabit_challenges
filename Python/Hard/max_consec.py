# https://edabit.com/challenge/9v34qtFufkqPmzeDu
def max_consec(lst):
    lst=sorted(set(lst))
    lst2=[]
    l=[]
    for i in range(1,len(lst)+1):
        n=lst[i-1:i+1]
        if n[-1]-n[0]==1:
            lst2+=n
        else:
            lst2=sorted(set(lst2))
            l.append(lst2)
            lst2=[]
    return len(max(l,key=len))




# print(max_consec([4, 9, 10, 5, 17, 3, 8, 11, 1, 12, 18, 20]), 5)
# print(max_consec([14, 13, 7, 1, 4, 12, 3, 7, 7, 12, 11, 5, 7]), 4)
# print(max_consec([13, 3, 8, 5, 5, 2, 1, 13, 8, 6, 14, 2, 11, 4, 10, 8, 1, 10, 9]), 6)
# print(max_consec([1, 4, 14, 9, 7, 9, 3, 13, 7, 4, 14, 11, 14, 8, 1, 11, 0, 1]), 3)
# print(max_consec([2, 3, 7, 2, 14, 4, 7, 3, 10, 2, 8, 7, 14, 9, 5, 7, 3]), 4)
# print(max_consec([1, 1, 14, 8, 11, 13, 0, 3, 9, 6, 11, 4, 10, 12, 5, 2, 13, 13, 10, 3, 7, 12, 14, 0, 0, 10, 6, 12]), 15)
# print(max_consec([11, 10, 13, 6, 10, 14, 4, 0, 12, 9, 13, 2, 3, 13, 4, 3, 10]), 6)
