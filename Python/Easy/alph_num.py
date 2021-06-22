# https://edabit.com/challenge/e6fL5EiwGZcsW7C5D
def alph_num(txt):
    ascii_uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return " ".join(str(ascii_uppercase.index(letter)) for letter in txt)

print(alph_num("ABCD"), "0 1 2 3")
print(alph_num("BCDA"), "1 2 3 0")
print(alph_num("AAA"), "0 0 0")
print(alph_num("XYZ"), "23 24 25")
