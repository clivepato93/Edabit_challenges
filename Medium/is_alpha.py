def is_alpha(word):
    l='abcdefghijklmnopqrstuvwxyz'
    w=[letter.lower() for letter in word if letter.isalpha()]
    return sum(l.index(letter)+1 for letter in w)%2==0

print(is_alpha("i'am king"), True)
print(is_alpha("True"), True)
print(is_alpha("alexa"), False)
