# https://edabit.com/challenge/2kz9W4tqZyCNCAhik

def MultiplyByLength(arr):
	return [i*len(arr) for i in arr]


print(MultiplyByLength([2,6,4,9]), [8,24,16,36])
print(MultiplyByLength([4,1,1]), [12,3,3])
print(MultiplyByLength([1,0,3,3,7,2,1]), [7,0,21,21,49,14,7])
print(MultiplyByLength([0]), [0])
