# https://edabit.com/challenge/H2EyqacEnijCozCWs
def first_n_vowels(txt, n):
    t=[]
    for letter in txt:
        if len(t)<n and letter in 'aeiou':
            t.append(letter)
    return ''.join(t) if len(t)>=n else "invalid"

print(first_n_vowels("sharpening skills", 3), "aei")
print(first_n_vowels("major league", 5), "aoeau")
print(first_n_vowels("crabby patty", 2), "aa")
print(first_n_vowels("shrimp", 1), "i")
print(first_n_vowels("shrimpy", 2), "invalid")
print(first_n_vowels("hostess", 5), "invalid")
