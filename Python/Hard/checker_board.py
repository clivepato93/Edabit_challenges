# https://edabit.com/challenge/Lx9mL2uBWwtJFv94a 
def checker_board(n, el1, el2):
    if el1==el2:
        return "invalid"
    l=[el1 if i%2==0 else el2 for i in range(0,n**2)]
    l=[l[i:i+n] for i in range(0,len(l),n)]
    if n%2==0:
        for i in range(1,len(l),2):
            l[i]=l[i][::-1]
        return l
    return l



print(checker_board(3, 'A', 'B'), [
	['A', 'B', 'A'],
	['B', 'A', 'B'],
	['A', 'B', 'A']
])

print(checker_board(2, 7, 6), [
	[7, 6],
	[6, 7]
])

print(checker_board(3, 1, 0), [
	[1, 0, 1],
	[0, 1, 0],
	[1, 0, 1]
])

print(checker_board(3, 0, 1), [
	[0, 1, 0],
	[1, 0, 1],
	[0, 1, 0]
])

print(checker_board(4, 'c', 'd'), [
	['c', 'd', 'c', 'd'],
	['d', 'c', 'd', 'c'],
	['c', 'd', 'c', 'd'],
	['d', 'c', 'd', 'c']
])

print(checker_board(4, 'c', 'c'), "invalid")
