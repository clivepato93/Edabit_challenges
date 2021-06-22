# https://edabit.com/challenge/zW9JME7XNew4tgCCE
def reversible_inclusive_list(start,end):
	return [i for i in range(start,end-1,-1)] if start>end else [i for i in range(start,end+1)]

print(reversible_inclusive_list(5, 1))

actual_param = [[5, 1], [6, 2], [10, 20], [24, 17], [40, 50], [51, 41], [11, 66], [9, 3], [6, 16]]
expected_param = [
  [5, 4, 3, 2, 1],
  [6, 5, 4, 3, 2],
  [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [24, 23, 22, 21, 20, 19, 18, 17],
  [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
  [51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41],
  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
   40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66],
  [9, 8, 7, 6, 5, 4, 3],
  [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
]
for i, n in enumerate(actual_param): print(reversible_inclusive_list(*n), expected_param[i])
