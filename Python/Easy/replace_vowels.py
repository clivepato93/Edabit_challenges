# https://edabit.com/challenge/Ggq8GtYPeHJQg4v7q
# Create a function that replaces all the vowels in a string with a specified character.
# my solution
def replace_vowels(txt, ch):
    return ''.join([letter.replace(letter,ch) if letter in 'aeiou' else letter for letter in txt])


# other solutions
def replace_vowels(txt, ch):
    for char in txt:
        if char in "aeiou":
            txt = txt.replace(char,ch)
    return txt

def replace_vowels(txt, ch):
	vowels = "aeiou"
	new = [ ch if x in vowels or upper_vowels else x for x in txt  ]
	return ''.join(new)

def replace_vowels(txt, ch):
	return txt.replace("a", ch).replace("e", ch).replace("i", ch).replace("o", ch).replace("u", ch)

print(replace_vowels("the aardvark", "#"), "th# ##rdv#rk")
print(replace_vowels("the aardvark", "#"), "th# ##rdv#rk")
print(replace_vowels("minnie mouse", "?"), "m?nn?? m??s?")
print(replace_vowels("shakespeare", "*"), "sh*k*sp**r*")
print(replace_vowels("all is fair in love and war", "<"), "<ll <s f<<r <n l<v< <nd w<r")


for i in range(0+1,11):
    print(i)
