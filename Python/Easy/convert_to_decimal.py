def convert_to_decimal(perc):
	return [float(i[:-1])/100 for i in perc]

print(convert_to_decimal(["33%", "98.1%", "56.44%", "100%"]), [0.33, 0.981, 0.5644, 1])

# https://edabit.com/challenge/NZwFY7HyeBTM25guM
