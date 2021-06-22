# https://edabit.com/challenge/pQavNkBbdmvSMmx5x

def majority_vote(lst):
    def c(i):
        return i[1]
    s=[(i,round(lst.count(i)/float(len(lst)),2)) for i in set(lst)]
    if len(s)==1:
        return s[0][0]
    elif all(s[i][1]==s[i-1][1] for i in range(1,len(s))):
        return None
    return max(s,key=c)[0]




print(majority_vote(["A", "B", "B", "B", "A", "A"]), None)
print(majority_vote(["B", "B", "B"]), "B")
print(majority_vote(["A", "B", "B"]), "B")
print(majority_vote(["A", "A", "B"]), "A")
print(majority_vote(["A", "A", "A", "B", "C", "A"]), "A")
print(majority_vote(["B", "A", "B", "B", "C", "A", "B", "B"]), "B")
print(majority_vote(["A", "B", "B", "A", "C", "C"]), None)
print(majority_vote(["A", "B"]), None)
print(majority_vote(["A"]), "A")
print(majority_vote([]), None)
