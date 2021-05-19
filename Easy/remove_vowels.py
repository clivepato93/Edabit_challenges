# https://edabit.com/challenge/AnjPhyJ7qyKCHgfrn

# Fix this incorrect code, so that all tests pass!
# def remove_vowels(string):
# 	vowels = "aeiou"
#     for vowel in vowels[1]:
#     	string.replace(vowel, "", 1)
#     return string

def remove_vowels(string):
    vowels = "aeiou"
    for word in string:
        if word in vowels:
            string=string.replace(vowels[vowels.index(word)], "")
    return string

# def remove_vowels(string):
#     vowels = "aeiou"
#     for vowel in vowels:
#         string = string.replace(vowel, "")
#     return string

print(remove_vowels("ben"), "bn")
print(remove_vowels("candy"), "cndy")
print(remove_vowels("hello"), "hll")
# print(remove_vowels("apple"), "ppl")
# print(remove_vowels("fever"), "fvr")
