# https://edabit.com/challenge/bKfxE7SWnRKTpyZQT
def replace_vowel(word):
    return word.replace("a","1").replace("e","2").replace("i","3").replace("o","0").replace("u","5")

print(replace_vowel("karachi"), "k1r1ch3")
print(replace_vowel("dang"), "d1ng")
print(replace_vowel("a"), "1")
print(replace_vowel("chembur"), "ch2mb5r")
print(replace_vowel("khandbari"), "kh1ndb1r3")
print(replace_vowel("thamel"), "th1m2l")
