from math import sqrt
def next_square(n):
    try:
        root = int(sqrt(n))
        new_number=((sqrt(n)+1)*(sqrt(n)+1))
        return int(new_number) if int(new_number)==float(new_number) else None

    except TypeError:
        return None
def next_square(n):
    return None if int(sqrt(n)) != float(sqrt(n)) else ((sqrt(n)+1)*(sqrt(n)+1))

	# return int(new_number) if isinstance(int(new_number), int)else None

print(next_square(121), 144, "Wrong output for 121")
# print(next_square(625), 676, "Wrong output for 625")
# print(next_square(319225), 320356, "Wrong output for 319225")
# print(next_square(15241383936), 15241630849, "Wrong output for 15241383936")
print(next_square(155), None, "Wrong output for 155")
# print(next_square(342786627), None, "Wrong output for 342786627")
#Mubashir


# https://edabit.com/challenge/YJWFLp5FD287hRGkz
