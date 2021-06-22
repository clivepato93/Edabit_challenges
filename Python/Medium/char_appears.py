# https://edabit.com/challenge/ucsJxQNrkYnpzPaFj
def char_appears(sentence, char):
    return [word.count(char) for word in sentence.lower().split()]

print(char_appears("She sells sea shells by the seashore.", "s"), [1, 2, 1, 2, 0, 0, 2])
print(char_appears("Peter Piper picked a peck of pickled peppers.", "p"), [1, 2, 1, 0, 1, 0, 1, 3])
print(char_appears("She hiked in the morning, then swam in the river.", "t"), [0, 0, 0, 1, 0, 1, 0, 0, 1, 0])
print(char_appears("I scream, you scream, we all scream for ice cream.", "f"), [0, 0, 0, 0, 0, 0, 0, 1, 0, 0])
print(char_appears("Snap, crackle, pop!", "p"), [1, 0, 2])
print(char_appears("What a wonderful world.", "w"), [1, 0, 1, 1])
