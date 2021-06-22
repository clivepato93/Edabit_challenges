# https://edabit.com/challenge/epMcaSNzBFSF5uB89

def currently_winning(s):
    y=0
    o=0
    m=list(zip(s[::2],s[1::2]))
    lst=[]
    for a,b in m:
        y+=a
        o+=b

        if y==o:
            lst.append("T")
        elif y>o:
            lst.append("Y")
        else:
            lst.append("O")
    return m,lst



print(currently_winning([10, 10, 22, 30, 5, 40]), ['T', 'O', 'O'])
print(currently_winning([5, 1, 2, 10]), ['Y', 'O'])
print(currently_winning([10, 10, 5, 5, 2, 2, 1, 3, 100, 5]), ['T', 'T', 'T', 'O', 'Y'])
print(currently_winning([5, 15, 17, 35, 16, 40, 66, 12, 10, 9]), ['O', 'O', 'O', 'Y', 'Y'])
print(currently_winning([33, 22, 4, 9, 12, 15, 32, 7, 9, 10, 70, 100]), ['Y', 'Y', 'Y', 'Y', 'Y', 'O'])
