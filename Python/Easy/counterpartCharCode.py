# https://edabit.com/challenge/QFXMcwaQZ8FTAuEtg
def counterpartCharCode(char):
    if char.islower():
        return ord(char.upper())
    else:
        return ord(char.lower())


print(counterpartCharCode('a'), 65)
print(counterpartCharCode('A'), 97)


def evenly_divisible(a, b, c):
    return sum([number for number in range(a,b+1) if number % c ==0])
print(evenly_divisible(1, 10, 3), 18)

# print(evenly_divisible(1, 10, 2), 30)
