# https://edabit.com/challenge/HNjRjrNPueF5vRh9S
def hamming_code(m):
    t=[bin(ord(i)).replace("b","").zfill(8) for i in m]
    c=[i*3 for b in t for i in b]
    return "".join(c)


print(hamming_code("hey"), "000111111000111000000000000111111000000111000111000111111111111000000111")
print(hamming_code("mubashir"), "000111111000111111000111000111111111000111000111000111111000000000111000000111111000000000000111000111111111000000111111000111111000111000000000000111111000111000000111000111111111000000111000")
print(hamming_code("matt"), "000111111000111111000111000111111000000000000111000111111111000111000000000111111111000111000000")
print(hamming_code("T3st"), "000111000111000111000000000000111111000000111111000111111111000000111111000111111111000111000000")
print(hamming_code("T?st!%"), "000111000111000111000000000000111111111111111111000111111111000000111111000111111111000111000000000000111000000000000111000000111000000111000111")
# Mubashir
