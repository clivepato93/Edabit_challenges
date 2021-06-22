# https://edabit.com/challenge/7RrPMoWifqRHPPqj2

def safecracker(start, increments):
    start=start+100 if start<increments[0] else start
    for n in range(len(increments)):
        if n%2==0:
            start-=increments[n]
            increments[n]=start%100
        else:
            start+=(increments[n])
            increments[n]=start%100
            start=(start+100)
        # print(start)
    return increments
print(safecracker(99, [87, 61, 91]), [12, 73, 82])
# print(safecracker(63, [22, 16, 35]), [41, 57, 22])
# print(safecracker(18, [10, 57, 96]), [8, 65, 69])
print(safecracker(82, [91, 4, 91]), [91, 95, 4])
# print(safecracker(83, [37, 12, 7]), [46, 58, 51])
# print(safecracker(31, [44, 86, 23]), [87, 73, 50])
# print(safecracker(96, [47, 76, 89]), [49, 25, 36])
# print(safecracker(82, [41, 5, 66]), [41, 46, 80])
# print(safecracker(0, [21, 94, 92]), [79, 73, 81])
