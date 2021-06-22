# https://edabit.com/challenge/PGXeFPN6buQDXXwPm
def trace(lst):
    final = []
    count=0
    for row in lst:
        final.append(row[count])
        count+=1
    return sum(final)


print(trace(
	[[1, 4],
	 [4, 1]]
), 2)

print(trace(
	[[1, 2, 3],
	 [4, 5, 6],
	 [7, 8, 9]]
), 15)

print(trace(
	[[12345]],
), 12345)

print(trace(
	[[1, 0, 1, 0],
	 [0, 2, 0, 2],
	 [3, 0, 3, 0],
	 [0, 4, 0, 4]]
), 10)

print(trace(
	[[0, 1, 0, 1],
	 [2, 0, 2, 0],
	 [0, 3, 0, 3],
	 [4, 0, 4, 0]]
), 0)

print(trace(
	[[1, 8,  9, 16],
	 [2, 7, 10, 15],
	 [3, 6, 11, 14],
	 [4, 5, 12, 13]]
), 32)
