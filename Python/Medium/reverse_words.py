def reverse_words(words):
    words=words.split()
    return " ".join(words[::-1])
# https://edabit.com/challenge/SfEretprfmbbcTChT

def reverse_words(words):
    return " ".join(word for word in words.split()[::-1])

print(reverse_words("hello world!"), "world! hello")
print(reverse_words("blue is sky the"), "the sky is blue")
print(reverse_words("a good example"), "example good a")
print(reverse_words("fraud! of example another is this"), "this is another example of fraud!")
print(reverse_words("man! the are You"), "You are the man!")
