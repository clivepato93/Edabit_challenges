# https://edabit.com/challenge/XsqET8hSTBG2AR5kM
def letter_distance(txt1, txt2):
    return sum(list(abs(ord(a)-ord(b)) for a,b in zip(txt1,txt2)))+abs(len(txt1)-len(txt2))

print(letter_distance('house', 'fly'), 11)
print(letter_distance('sharp', 'sharq'), 1)
print(letter_distance('abcde', 'bcdef'), 5)
print(letter_distance('abcde', 'a'), 4)
print(letter_distance('abcde', 'e'), 8)
print(letter_distance('abcde', 'Abcde'), 32)
print(letter_distance('abcde', 'A'), 36)
print(letter_distance('very', 'fragile'), 67)
