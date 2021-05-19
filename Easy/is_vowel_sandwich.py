# https://edabit.com/challenge/Kh7Bm9X7Q4rYB8uT7
# my solution
def is_vowel_sandwich(s):
	return False if len(s) != 3 else True if (s[0] not in 'aieou' and s[-1] not in 'aieou') and s[1] in 'aeiou' else False

def is_vowel_sandwich(s):
	return [0, 1, 0] == [1 if l in 'aeiou' else 0 for l in s]

print(is_vowel_sandwich("cat"), True)
print(is_vowel_sandwich("ear"), False)
