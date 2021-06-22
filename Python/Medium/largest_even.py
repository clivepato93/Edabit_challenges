# https://edabit.com/challenge/ksZrMdraPqHjvbaE6
def largest_even(lst):
    lst=[number for number in lst if number%2==0]
    if len(lst)==0:
        return -1
    else:
        for i in range(0,len(lst)):
            maxy=0
            if maxy<lst[i]:
                maxy=lst[i]
        return maxy

print(largest_even([3, 7, 2, 1, 7, 9, 10, 13]))
