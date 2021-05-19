# https://edabit.com/challenge/6NoaFGKJgRW6oXhLC
def sum_of_vowels(sentence):
    vowels={"a":4,
            "e":3,
            "i":1}
    return sum(vowels[letter] for letter in sentence.lower() if letter in "aei")

print(sum_of_vowels('Let\'s test this function.'), 8,'\"Let\'s test this function.\"\n')
print(sum_of_vowels('Do I get the correct output?'), 10,'\"Do I get the correct output?\"\n')
print(sum_of_vowels('I love edabit!'), 12,'\"I love edabit!\"\n')
print(sum_of_vowels('Will you still need me, will you still feed me when I\'m 64?'), 26,'\"Will you still need me, will you still feed me when I\'m 64?\"\n')
print(sum_of_vowels('The greatest glory in living lies not in never falling, but in rising every time we fall.'), 52,'\"The greatest glory in living lies not in never falling, but in rising every time we fall.\"\n')
