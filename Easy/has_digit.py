# https://edabit.com/challenge/nqvuJue4TevAERzCs
import re
def has_digit(txt):
    return True if re.search("[0-9]", txt) else False


print(has_digit('niouwjzphmyllvmwf'), False)
print(has_digit('lmnuovrhlg'), False)
print(has_digit('xlnjr33gtj4gcmuw'), True)
print(has_digit('meijxmi0mfvsvajsqn'), True)
print(has_digit('gnd7rksfnx0vxz'), True)
