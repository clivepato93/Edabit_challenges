# https://edabit.com/challenge/CqNoAPcQrckobTacs
# def missing_letter(lst):
#     return "".join([chr(n) for n in range(ord(lst[0]),ord(lst[-1])) if chr(n) not in lst])
#
# print(missing_letter(["a", "b", "c", "e", "f", "g"]), "d")
# print(missing_letter(["O", "Q", "R", "S"]), "P")
# print(missing_letter(["t", "u", "v", "w", "x", "z"]), "y")
# print(missing_letter(["m", "o"]), "n")
# print(missing_letter(["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]), "i")
# print(missing_letter(["q", "s", "t"]), "r")
# print(missing_letter(["c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n"]), "j")
# print(missing_letter(["e", "f", "g", "h", "i", "j", "k", "m", "n", "o", "p"]), "l")
# print(missing_letter(["t", "u", "w", "x"]), "v")
# print(missing_letter(["B", "D"]), "C")

# https://edabit.com/challenge/Q5bu2bXxXxfWtvmjy
def missing_letter(lst):
    a=sum(ord(chr(i)) for i in range(ord(lst[0]),ord(lst[-1])+1))-sum(ord(i) for i in lst)
    return chr(a) if a else "No Missing Letter"


# -sum(ord(i) for i in lst)

print(missing_letter("abdefg"), "c", "Example #1")
print(missing_letter("mnopqs"), "r", "Example #2")
print(missing_letter("tuvxyz"), "w", "Example #3")
print(missing_letter("jlm"), "k")
print(missing_letter("rsu"), "t")
print(missing_letter("eghij"), "f")
print(missing_letter("qrtuv"), "s")
print(missing_letter("ghijklmno"), "No Missing Letter", "Example #4")
print(missing_letter("xyz"), "No Missing Letter")
