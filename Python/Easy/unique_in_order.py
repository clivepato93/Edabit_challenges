# https://edabit.com/challenge/2XH27tbCq4Zyuz7xB
def unique_in_order(sequence):
	return [sequence[number] for number in range(0,len(sequence)) if sequence[number-1]!=sequence[number]]

def unique_in_order(sequence):
    for number in range(0,len(sequence)):
        print(sequence[number-1],sequence[number])

unique_in_order("AAAABBBCCDAABBB")

# print(unique_in_order("AAAABBBCCDAABBB"), ["A", "B", "C", "D", "A", "B"])
# print(unique_in_order("ABBCcAD"), ["A", "B", "C", "c", "A", "D"])
# print(unique_in_order([1, 2, 2, 3, 3]), [1, 2, 3])
# print(unique_in_order("12333355555522211133"), ["1", "2", "3", "5", "2", "1", "3"])
# print(unique_in_order("uuUfffFgGggYtt76%5$$$"), ["u", "U", "f", "F", "g", "G", "g", "Y", "t", "7", "6", "%", "5", "$"])
# print(unique_in_order(["1", "2", "2", "3", "3"]), ["1", "2", "3"])
# print(unique_in_order([3, 7, 3, 8, 4]), [3, 7, 3, 8, 4])
# print(unique_in_order("ABC"), ["A", "B", "C"])
# print(unique_in_order("$$$%%%$$$%%%"), ["$", "%", "$", "%"])
# print(unique_in_order([1, 1, 1, "A", "B", "B"]), [1, "A", "B"])
