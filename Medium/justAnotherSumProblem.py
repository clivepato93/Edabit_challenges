# https://edabit.com/challenge/XGKSYNExDBRWLzDmm
def justAnotherSumProblem(a,b):
    l=sorted([a,b])
    return sum([x for x in range(l[0],l[1]+1)])

print(justAnotherSumProblem(1,-10), -54)
print(justAnotherSumProblem(-20,5), -195)
