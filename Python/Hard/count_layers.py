# https://edabit.com/challenge/LaBMjgbMjf5BajczX
def count_layers(rug):
    return len(set(rug))

print(count_layers([
"AAAAAAAAA",
"ABBBBBBBA",
"ABCCCCCBA",
"ABBBBBBBA",
"AAAAAAAAA"]), 3)

print(count_layers([
"AAAA",
"ABBA",
"AAAA"]), 2)
