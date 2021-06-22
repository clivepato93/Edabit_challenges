# https://edabit.com/challenge/YnsBcniRG9k77SSvA

def print_all_groups():
    r=["a", "b", "c", "d", "e"]
    nested= [[str(number)+letter for letter  in r]for number in range(1,7)]
    nested = ", ".join([val for sublist in nested for val in sublist])
    # print(type(nested))
    return nested
print(print_all_groups())


def print_all_groups():
	return ', '.join(i+j for i in '123456' for j in 'abcde')
