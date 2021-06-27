# https://edabit.com/challenge/3A3mHS5B3NNZddQL2
def interview(lst, tot):
    l=[5,10,15,20]
    g=0
    if len(lst)!=8 or tot>120 :
        return 'disqualified'
    for i in range(0,len(lst),2):
        if sum(lst[i:i+2])//2>l[g]:
            return 'disqualified'
        g+=1
    return "qualified"
    # return 'qualified' if all(sum(lst[i:i+2])//2==l[i]

print(interview([5, 5, 10, 10, 15, 15, 20, 20], 120), 'qualified')
print(interview([2, 3, 8, 6, 5, 12, 10, 18], 120), 'qualified')
print(interview([2, 3, 8, 6, 5, 12, 10, 18], 64), 'qualified')
print(interview([5, 5, 10, 10, 25, 15, 20, 20], 120), 'disqualified')
print(interview([5, 5, 10, 10, 15, 15, 20], 120), 'disqualified')
print(interview([5, 5, 10, 10, 15, 15, 20, 20], 130), 'disqualified')
print(interview([5, 5, 10, 10, 15, 20, 50], 160), 'disqualified')
print(interview([5, 5, 10, 10, 15, 15, 40], 120), 'disqualified')
print(interview([10, 10, 15, 15, 20, 20], 150), 'disqualified')
print(interview([5, 5, 10, 20, 15, 15, 20, 20], 140), 'disqualified')
