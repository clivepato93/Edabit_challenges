# https://edabit.com/challenge/kjJWvK9XtdbEJ2EKe
def sort_array(lst):
    for i in range(0,len(lst)-1):
        for v in range(i+1,len(lst)):
            if lst[i]>lst[v]:
                t=lst[i]
                lst[i]=lst[v]
                lst[v]=t
    return lst


print(sort_array([2, -5, 1, 4, 7, 8]), [-5, 1, 2, 4, 7, 8])
