def square_patch(n):
    return [[n]*n for i in range(1,n+1)]

# https://edabit.com/challenge/K3qMssK6mF34ctXE5
print(square_patch(3), [
	[3, 3, 3],
	[3, 3, 3],
	[3, 3, 3]
])

print(square_patch(2), [
	[2, 2],
	[2, 2]
])

print(square_patch(4), [
	[4, 4, 4, 4],
	[4, 4, 4, 4],
	[4, 4, 4, 4],
	[4, 4, 4, 4]
])

print(square_patch(6), [
	[6, 6, 6, 6, 6, 6],
	[6, 6, 6, 6, 6, 6],
	[6, 6, 6, 6, 6, 6],
	[6, 6, 6, 6, 6, 6],
	[6, 6, 6, 6, 6, 6],
	[6, 6, 6, 6, 6, 6]
])

print(square_patch(5), [
	[5, 5, 5, 5, 5],
	[5, 5, 5, 5, 5],
	[5, 5, 5, 5, 5],
	[5, 5, 5, 5, 5],
	[5, 5, 5, 5, 5]
])

print(square_patch(1), [[1]])

print(square_patch(0), [])
