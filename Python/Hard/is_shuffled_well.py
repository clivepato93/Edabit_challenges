def is_shuffled_well(lst):
    c=0
    check=list(zip(lst,lst[1:]))
    for a,b in check:
        if c==2:
            return False
        if abs(a-b)==1:
            c+=1
        else:
            c=0
    return True
    # return sum(abs(a-b)==1 for a,b in list(zip(lst,lst[1:])))<2
    # for i in range(0,len(lst)-1):
        # if lst[i-1]==lst[i]-1 and
        # if lst[i:i+3]==list(range(lst[i],lst[i]+3)):
    #         # print(lst[i:i+3])
    #         return False
    #     elif lst[i:i+3]==list(reversed(range(lst[i],lst[i]+3))):
    #         print(lst[i:i+3])
    # return True
print(is_shuffled_well([6, 4, 2, 1, 3, 7, 8, 10, 5, 9]), True)

print(is_shuffled_well([1, 2, 3, 5, 8, 6, 9, 10, 7, 4]), False, "1, 2, 3 appear consecutively.")
print(is_shuffled_well([3, 5, 1, 9, 8, 7, 6, 4, 2, 10]), False, "9, 8, 7, 6 appear consecutively.")
print(is_shuffled_well([1, 5, 3, 8, 10, 2, 7, 6, 4, 9]), True, "No consecutive numbers appear.")
print(is_shuffled_well([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]), True, "No consecutive numbers appear.")
print(is_shuffled_well([5, 6, 7, 9, 1, 10, 3, 8, 2, 4]), False)
