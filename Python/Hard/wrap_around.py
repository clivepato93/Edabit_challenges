# https://edabit.com/challenge/Q9EkExy6BYLnqBCQB

def wrap_around(s, o):
    return s[o%len(s):]+s[:o%len(s)] if o>0 else s[o%len(s):]+s[:o%len(s)]

# print(wrap_around("Hello, World!", 2,), "llo, World!He")
print(wrap_around("From what I gathered", -4), "eredFrom what I gath")
# print(wrap_around("No Changes", 0), "No Changes")
# print(wrap_around("S", -60), "S")
# print(wrap_around("Subordinating", 2), "bordinatingSu")
# print(wrap_around("Assemblywomen", -6), "ywomenAssembl")
# print(wrap_around("Pedantic", 4), "nticPeda")
print(wrap_around("Nonscience", -116), "cienceNons")
print(wrap_around("Excelsior", 30), "elsiorExc")
# print(wrap_around("Incomprehensibilities", 50), "hensibilitiesIncompre")
