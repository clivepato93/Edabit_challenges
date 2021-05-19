# vowels=['a','e','i','o','u']
# https://edabit.com/challenge/ycaiA3qTXJWyDz6Dq
def consonants(word):
    vowels=['a','e','i','o','u']
    return sum(1 for letter in word.lower() if letter not in vowels and letter.isalpha())

def vowels(word):
    vowels=['a','e','i','o','u']

    return sum(1 for letter in word.lower() if letter in vowels)

# print(vowels('Jameel SAEB'), 5)
print(consonants('Jameel SAEB'), 5)
print(consonants('Peter PANS'), 6)
print(vowels('Peter PAN'), 3)
print(consonants('hello'), 3)
print(vowels('hello'), 2)
print(consonants('grEatly'), 5)
print(vowels('greatly'), 2)
print(vowels('He|\o mY Fr*end'), 3)
print(consonants('He|\o mY Fr*end'), 7)
print(consonants('SmIthsonian'), 7)
print(vowels('Smithsonian'), 4)
print(consonants('fudge'), 3)
print(vowels('fudge'), 2)
print(consonants('G^oOd B&y'), 4)
print(consonants('lemony'), 4)
print(vowels('lemony'), 2)
print(consonants('chOcolate'), 5)
print(vowels('chocolate'), 4)
