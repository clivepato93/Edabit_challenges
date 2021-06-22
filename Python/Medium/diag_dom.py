
# https://edabit.com/challenge/5WvxKLK55JvT8NLfR

def diag_dom(lst):
    l=[]

    for i in range(len(lst)):
        l.append([abs(lst[i].pop(i)),sum(abs(n) for n in lst[i])])
    # return l
    return all(a>b for a,b in l)

def diag_dom(lst):
    for i in range(len(lst)):
        if abs(lst[i].pop(i))<=sum(abs(n) for n in lst[i]):
            return False
    # return l
    return True

print(diag_dom([
	[2, -1],
	[-1, 2]
]), True)

print(diag_dom([
	[0, 1],
	[1, 0]
]), False)

print(diag_dom([
	[10,  3,  6],
	[2, -9, -6],
	[1, -1,  4]
]), True)

print(diag_dom([
	[10,  3,  6],
	[3, -9, -6],
	[1, -1,  4]
]), False)

print(diag_dom([
	[1, 0, 1, 0],
	[0, 2, 0, 2],
	[3, 0, 3, 0],
	[0, 4, 0, 4]
]), False)

print(diag_dom([
	[5, 0,-1, 0],
	[0,-6, 0, 2],
	[3, 0, 7, 0],
	[0, 4, 0,-8]
]), True)

print(diag_dom([
	[5, 1,-1,-2],
	[0,-6,-3, 2],
	[3,-2, 7,-1],
	[-1, 3,-2,-8]
]), True)

print(diag_dom([
	[5, 1,-1,-2],
	[0,-6,-3, 2],
	[3,-2, 7,-2],
	[-1, 3,-2,-8]
]), False)
