# https://edabit.com/challenge/a55ygB8Bwj9tx6Hym
def steps_to_convert(txt):
	low=0
	upp=0
	for i in txt:
		if i.islower():
			low+=1
		else:
			upp+=1
	return min([low,upp])

print(steps_to_convert('abC'), 1)
print(steps_to_convert('abCBA'), 2)
