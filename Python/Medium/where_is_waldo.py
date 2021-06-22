# https://edabit.com/challenge/7Xu4Bx57v36oCZpT4

def where_is_waldo(lst):
    c=0
    for r in lst:
        c+=1
        for i in r:
            if r.count(i)==1:
                return [c,r.index(i)+1]

def where_is_waldo(lst):
    return [[r,r.index(i)+1] for r in lst for i in r if r.count(i)==1]

print(where_is_waldo([
	["A", "A", "A"],
	["A", "A", "A"],
	["A", "B", "A"]
]), [3, 2])
#
print(where_is_waldo([
	["c", "c", "c", "c"],
	["c", "c", "c", "d"]
]), [2, 4])
#
print(where_is_waldo([
	["O", "O", "O", "O"],
	["O", "O", "O", "O"],
	["O", "O", "O", "O"],
	["O", "O", "O", "O"],
	["P", "O", "O", "O"],
	["O", "O", "O", "O"]
]), [5, 1])
#
# print(where_is_waldo([
# 	["X", "X", "Y", "X"],
# 	["X", "X", "X", "X"],
# 	["X", "X", "X", "X"]
# ]), [1, 3])
