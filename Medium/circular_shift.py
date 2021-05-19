def circular_shift(lst1, lst2, n):
    return all(lst1[i]==lst2[i+n] for i in range(len(lst1)))

print(circular_shift(
	[1, 2, 3, 4],
	[3, 4, 1, 2],
	2
), True)

print(circular_shift(
	[1, 1],
	[1, 1],
	6
), True)

# print(circular_shift(
# 	[0, 1, 2, 3, 4, 5],
# 	[3, 4, 5, 2, 1, 0],
# 	3
# ), False)
#
# print(circular_shift(
# 	[0, 1, 2, 3],
# 	[1, 2, 3, 1],
# 	1
# ), False)
#
# print(circular_shift(
# 	list(range(32)),
# 	list(range(32)),
# 	0
# ), True)
#
# print(circular_shift(
# 	[1, 2, 1],
# 	[1, 2, 1],
# 	3
# ), True)
#
# print(circular_shift(
# 	[5, 7, 2, 3],
# 	[2, 3, 5, 7],
# 	-2
# ), True)
#
# print(circular_shift(
# 	[2, 3, 5, 7, 87],
# 	[2, 3, 5, 7, 87],
# 	-4
# ), False)
