# https://edabit.com/challenge/tnKZCAkdnZpiuDiWA
def flip_end_chars(txt):
    if len(txt)<2 or not isinstance(txt,str):
        return "Incompatible."
    elif txt[0]==txt[-1]:
        return "Two's a pair."
    else:
        return txt[-1]+txt[1:-1]+txt[0]
	# return "Two's a pair." if txt[0]==txt[1] else "Incompatible" if (len(txt)<2 or txt=="") or not isinstance(txt,str) else txt[-1]+txt[1:-1]+txt[0]

# print(flip_end_chars("Cat, dog, and mouse."), ".at, dog, and mouseC")
# print(flip_end_chars("Anna, Banana"), "anna, BananA")
# print(flip_end_chars("[]"), "][")
print(flip_end_chars(""), "Incompatible.")
# print(flip_end_chars([1, 2, 3]), "Incompatible.")
print(flip_end_chars("dfdkf49824fdfdfjhd"), "Two's a pair.")
print(flip_end_chars("#343473847#"), "Two's a pair.")
