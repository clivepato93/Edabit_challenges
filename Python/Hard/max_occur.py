# https://edabit.com/challenge/MbbX7qJJeEnQu9bKr
import collections
def max_occur(text):
    n=collections.Counter(text)
    o=max(n,key= lambda i:n[i])
    lst=sorted([x for x in n if n[o]==n[x]])
    return lst if len(lst)!=len(text) else "No Repetition"
    # return o
print(max_occur("Computer Science"), ['e'], "Wrong Answer")
print(max_occur("Edabit"), "No Repetition", "Wrong Answer")
print(max_occur("system admin"), ['m', 's'], "Wrong Answer")
print(max_occur("the quick brown fox jumps over the lazy dog"), [' '], "Wrong Answer")
print(max_occur("Computer ScienceComputer ScienceComputer ScienceComputer ScienceComputer ScienceComputer ScienceComputer ScienceComputer ScienceComputer Science"), ['e'], "Wrong Answer")
print(max_occur("edabitisawesomequickcountingmergebubbleinsertionselctionshellsortingbinarylinearsearch"), ['e'], "Wrong Answer")
