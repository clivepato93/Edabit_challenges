# https://edabit.com/challenge/wZojj7RuwnNDL4Seh
def completely_filled(lst):
    if len(lst)<=2:
        return True
    return all(element=="*" for row in lst[1:-1] for element in row[1:-1])

print(completely_filled([
		"#"
	]), True)
print(completely_filled([
		"##",
		"##"
	]), True)
print(completely_filled([
		"###",
		"#*#",
		"###"
	]), True)
print(completely_filled([
		"######",
		"#****#",
		"#****#",
		"#****#",
		"#****#",
		"######"
	]), True)
print(completely_filled([
		"#####",
		"#***#",
		"#***#",
		"#***#",
		"#####"
	]), True)
print(completely_filled([
		"#####",
		"#* *#",
		"#***#",
		"#***#",
		"#####"
	]), False)
print(completely_filled([
		"######",
		"#* **#",
		"#****#",
		"#* **#",
		"#*** #",
		"######"
	]), False)
print(completely_filled([
		"######",
		"#* **#",
		"#* **#",
		"#* **#",
		"#* **#",
		"######"
	]), False)
