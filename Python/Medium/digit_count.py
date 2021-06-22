# https://edabit.com/challenge/frRRffQGSrPTknfxY

def digit_count(n):
    string=str(n)
    final=[str(string.count(i)) for i in string]
    return int(''.join(final))

print(digit_count(221333), 221333)
print(digit_count(136116), 312332)
print(digit_count(2), 1)
print(digit_count(3410515780), 1122222112)
print(digit_count(24677734541), 13133313131)
