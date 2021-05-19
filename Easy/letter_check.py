# https://edabit.com/challenge/dFz2PDjQkXZ9FhEaz
def letter_check(lst):
    return set(lst[-1].lower()).issubset(set(lst[0].lower()))
	# return len(set(lst[-1]).issubset(set(lst[0])))==len(lst[-1])

print(letter_check(["trances", "nectar"]), True)
print(letter_check(["THE EYES", "they see"]), True)
print(letter_check(["assert", "staring"]), False)
print(letter_check(["arches", "later"]), False)
print(letter_check(["dale", "caller"]), False)
print(letter_check(["parses", "parsecs"]), False)
print(letter_check(["replays", "adam"]), False)
print(letter_check(["mastering", "streaming"]), True)
print(letter_check(["drapes", "compadres"]), False)
print(letter_check(["deltas", "slated"]), True)
