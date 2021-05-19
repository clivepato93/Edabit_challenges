# https://edabit.com/challenge/q3JMk2yqXfNyHWE9c
def double_letters(word):
    return any(i*2 for i in word)


print(double_letters("loop"), True)
# print(double_letters("meeting"), True)
# print(double_letters("yummy"), True)
# print(double_letters("moo"), True)
# print(double_letters("toodles"), True)
# print(double_letters("droop"), True)
# print(double_letters("loot"), True)
# print(double_letters("orange"), False)
# print(double_letters("munchkin"), False)
# print(double_letters("forestry"), False)
# print(double_letters("raindrops"), False)
# print(double_letters("gold"), False)
# print(double_letters("paradise"), False)
# print(double_letters("chicken"), False)
