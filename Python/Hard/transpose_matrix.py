# https://edabit.com/challenge/7pJZTgFstEt53f9TD
def transpose_matrix(lst):
    a=len(lst[0])
    l=[]
    for i in range(a):
        for x in range(0,len(lst)):
            l.append(lst[x][i])
    return [l[i:i+len(lst)] for i in range(0,len(l),len(lst))]

print(transpose_matrix([
		[1, 1, 1],
		[2, 2, 2],
		[3, 3, 3]
	]),  ([
		[1, 2, 3],
		[1, 2, 3],
		[1, 2, 3]
	]))

print(transpose_matrix([
		[1, 1, 1],
		[2, 2, 2]
	]),  ([
		[1, 2],
		[1, 2],
		[1, 2]
	]))

print(transpose_matrix([
		[1, 2, 3, 4],
		[5, 6, 7, 8],
		[9, 10, 11, 12]
	]),  ([
		[1, 5, 9],
		[2, 6, 10],
		[3, 7, 11],
		[4, 8, 12]
	]))
