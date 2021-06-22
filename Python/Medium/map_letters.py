def map_letters(word):
    w=sorted(set(word),key=word.index)
    c={}
    for l in w:
        c[l]=[i for i in range(len(word)) if word.startswith(l,i)]
    return c

# https://edabit.com/challenge/9CdF5hA7jRARpBwcF

print(map_letters(""), {})
print(map_letters("a"), { "a": [0] })
print(map_letters("abcdefg"), { "a": [0], "b": [1], "c": [2], "d": [3], "e": [4], "f": [5], "g": [6] })
print(map_letters("balloon"), { "b": [0], "a": [1], "l": [2, 3], "o": [4, 5], "n": [6] })
print(map_letters("imagining"), { "i": [0, 4, 6], "m": [1], "a": [2], "g": [3, 8], "n": [5, 7] })
print(map_letters("mummy"), { "m": [0, 2, 3], "u": [1], "y": [4] })
print(map_letters("aaaaaaabaaabaaabbb"), { "a": [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14], "b": [7, 11, 15, 16, 17] })
