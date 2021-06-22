# https://edabit.com/challenge/fxoMBTRoi3yNdruWE

def in_box(lst):
	for row in lst:
		for character in row:
			if "*" in row[1:-1] and (row.startswith("#") and row.endswith("#")):
				return True
	return False

print(in_box([
		"###",
		"# #",
		"###"
	]), False)
