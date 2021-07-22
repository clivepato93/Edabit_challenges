# https://edabit.com/challenge/LQgpGFMK9t9MELvph

def get_diagonals(lst):
    f=[]
    s=[]
    if not lst:
        return [f,s]
    x=0
    n=0
    e=-1
    for i in range(len(lst[0])):
        f.append(lst[x][n])
        s.append(lst[x][e])
        x+=1
        e-=1
        n+=1
    return [f,s]

print(get_diagonals([
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
]), [
	[1, 5, 9], 
	[3, 5, 7]
])

print(get_diagonals([
	["e", "z", "y", "o", "p", "t"],
	["b", "d", "a", "t", "i", "w"],
	["u", "l", "a", "n", "s", "k"],
	["s", "v", "k", "b", "r", "z"],
	["h", "e", "w", "c", "i", "j"],
	["r", "p", "y", "d", "x", "t"]
]), [
	["e", "d", "a", "b", "i", "t"], 
	["t", "i", "n", "k", "e", "r"]
])

# print(get_diagonals([
# 	[True, False, True, False],
# 	[False, True, False, True],
# 	[True, False, True, False],
# 	[False, False, False, True]
# ]), [
# 	[True, True, True, True], 
# 	[False, False, False, False]
# ])

# print(get_diagonals([
# 	[0, 1, 1, 0, 1, 1, 1, 0, 1, 0],
# 	[0, 0, 1, 0, 0, 1, 0, 1, 1, 1],
# 	[0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
# 	[1, 0, 1, 1, 1, 0, 0, 1, 0, 1],
# 	[1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
# 	[0, 0, 1, 0, 1, 0, 0, 1, 1, 1],
# 	[1, 1, 1, 1, 0, 1, 0, 0, 0, 1],
# 	[0, 0, 1, 1, 0, 1, 1, 0, 0, 0],
# 	[0, 1, 1, 1, 0, 1, 1, 1, 0, 0],
# 	[1, 0, 0, 0, 1, 1, 1, 1, 1, 1]
# ]), [
# 	[0, 0, 0, 1, 0, 0, 0, 0, 0, 1], 
# 	[0, 1, 1, 0, 0, 1, 1, 1, 1, 1]
# ])

# print(get_diagonals([["Trivial"]]), [ ["Trivial"], ["Trivial"]])
# print(get_diagonals([]), [ [], [] ])