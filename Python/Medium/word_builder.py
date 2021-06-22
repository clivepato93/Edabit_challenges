

# https://edabit.com/challenge/dYHH7CmYeWGXdEhCx
def word_builder(ltr, pos):
    constructor=[ltr[number] for number in pos]
    return ''.join(constructor)

def word_builder(letters, positions):
    c=list(zip(letters,positions))
    for a,b in c:
        letters[b]=a
    return ''.join(letters)


print(word_builder(["e", "t", "s", "t"], [1, 3, 2, 0]), "test")
print(word_builder(["b", "e", "t", "i", "d", "a"], [3, 0, 5, 4, 1, 2]), "edabit")
print(word_builder(["g", "e", "o"], [1, 0, 2]), "ego")
print(word_builder(["l", "e", "h", "n", "l", "c", "a", "e", "g"], [3, 5, 1, 6, 4, 0, 2, 8, 7]), "challenge")
print(word_builder(["e", "i", "l", "g", "x", "h", "p", "o", "c", "r", "i", "a", "c"], [1, 3, 0, 6, 2, 10, 9, 5, 4, 7, 11, 8, 12]), "lexicographic")
print(word_builder(["s", "o", "r", "t", "e", "d"], [0, 1, 2, 3, 4, 5]), "sorted")
