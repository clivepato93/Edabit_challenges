# https://edabit.com/challenge/e5S2DtfJafpybGhKc

def rotate(mat):
    f=[]
    mat=mat[::-1]
    a=len(mat[0])
    for i in range(a):
        for v in range(len(mat)):
            f.append(mat[v][i])
    return [f[i:i+a] for i in range(0,a*a,a)]

print(rotate(
[
	[1, 2], 
	[3, 4], 
]), 
[
	[3, 1], 
	[4, 2] 
])

print(rotate(
[
	[1, 2, 3], 
	[4, 5, 6], 
	[7, 8, 9]
]), 
[
	[7, 4, 1], 
	[8, 5, 2], 
	[9, 6, 3]
])

print(rotate(
[
	["a", "b", "c"],
	["d", "e", "f"], 
	["g", "h", "i"]
]), 
[
	["g", "d", "a"], 
	["h", "e", "b"], 
	["i", "f", "c"]
])

