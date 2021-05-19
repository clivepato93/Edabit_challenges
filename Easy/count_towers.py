# https://edabit.com/challenge/5q3FdCvrXtwQRoGmP
def count_towers(towers):
    return max([string.split().count("##") for item in towers for string in item])

print(count_towers([
	["     ##         "],
	["##   ##        ##"],
	["##   ##   ##   ##"],
	["##   ##   ##   ##"]
]), 4)
