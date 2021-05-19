def extend_vowels(word, num):
    if type(num)==float or num<0:
        return "invalid"
    elif num==0:
        return word
    elif type(num)==int:
        return "".join(i*(num+1) if i.lower()  in "aieou" else i for i in word)


print(extend_vowels("Hello", 5), "Heeeeeelloooooo")
print(extend_vowels("Edabit", 3), "EEEEdaaaabiiiit")
print(extend_vowels("Extend", 0), "Extend")
print(extend_vowels("A", 10), "AAAAAAAAAAA")
print(extend_vowels("Z", 93), "Z")
print(extend_vowels("Vowel", 0.5), "invalid")
print(extend_vowels("Nice", -8), "invalid")
