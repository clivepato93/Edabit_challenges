# https://edabit.com/challenge/MNePwAcuoKG9Cza8G
def build_staircase(h, b):
	return [[b for x in range(i)]+["_" for c in range(h-i)] for i in range(1,h+1)]


print(build_staircase(0, '#'),
[])

print(build_staircase(1, '#'),
[['#']])

print(build_staircase(2, '#'),
[['#', '_'],
['#', '#']])
