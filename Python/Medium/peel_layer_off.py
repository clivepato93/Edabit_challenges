def peel_layer_off(lst):
    return [row[1:-1] for row in lst[1:-1]]


print(peel_layer_off([
	['a', 'b', 'c', 'd'],
	['e', 'f', 'g', 'h'],
	['i', 'j', 'k', 'l'],
	['m', 'n', 'o', 'p']
]), [
	['f', 'g'],
	['j', 'k']
])

print(peel_layer_off([
	[1, 2, 3, 4, 5],
	[6, 7, 8, 9, 10],
	[11, 12, 13, 14, 15],
	[16, 17, 18, 19, 20],
	[21, 22, 23, 24, 25],
	[26, 27, 28, 29, 30],
	[31, 32, 33, 34, 35]
]), [
	[7, 8, 9],
	[12, 13, 14],
	[17, 18, 19],
	[22, 23, 24],
	[27, 28, 29],
])

print(peel_layer_off([
	[True, False, True],
	[False, False, True],
	[True, True, True]
]), [[False]])

print(peel_layer_off([
	['hello', 'world'],
	['hello', 'world']
]), [])

print(peel_layer_off([
	[True, False, True, 1, 2, 3, 4],
	[False, False, True, 5, 6, 7, 8],
	[True, True, True, 9, 10, 11, 12]
]), [[False, True, 5, 6, 7]])
