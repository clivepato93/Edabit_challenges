def circular_shift(lst1, lst2, n):
    return [lst1[i-abs(n)] if n<len(lst1) else lst1[i%n] for i in range(len(lst1))]==lst2

print(circular_shift(
	[1, 2, 3, 4],
	[3, 4, 1, 2],
	2
), True)

#
print(circular_shift(
	[1, 1],
	[1, 1],
	6
), True)


print(circular_shift(
	[0, 1, 2, 3, 4, 5],
	[3, 4, 5, 2, 1, 0],
	3
), False)

print(circular_shift(
	[0, 1, 2, 3],
	[1, 2, 3, 1],
	1
), False)
