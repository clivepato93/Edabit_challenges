# https://edabit.com/challenge/yXekCk3qRWYR5AHif
def vow_replace(word, vowel):
    # sentence = list(word)

    for letter in word:
        if letter == 'a':
            word=word.replace(letter, vowel)
        elif letter == 'e':
            word=word.replace(letter, vowel)
        elif letter == 'i':
            word=word.replace(letter, vowel)
        elif letter == 'o':
            word=word.replace(letter, vowel)
        elif letter == 'u':
            word=word.replace(letter, vowel)


    return word

print(vow_replace("apples and bananas", "u"), "upplus und bununus")
print(vow_replace("cheese casserole", "o"), "chooso cossorolo")
# print(vow_replace("stuffed jalapeno poppers", "e"), "steffed jelepene peppers")
# print(vow_replace("shrimp tempura", "a"), "shramp tampara")
# print(vow_replace("tuna sashimi", "i"), "tini sishimi")
# print(vow_replace("chocolate cake", "a"), "chacalata caka")
