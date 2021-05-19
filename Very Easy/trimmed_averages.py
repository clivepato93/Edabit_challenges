# https://edabit.com/challenge/3yPvbEjskPuuSSCAC
def trimmed_averages(lst):
    lst=sorted(lst)[1:-1]
    return round(sum(lst)/len(lst))

def trimmed_averages(lst):
    i=max(lst)
    c=min(lst)
    lst.remove(i)
    lst.remove(c)
    return round(sum(lst)/len(lst))

print(trimmed_averages([4, 5, 7, 100]), 6)
