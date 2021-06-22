# https://edabit.com/challenge/J2apiSnJE4RaGTj6x
def find_broken_keys(txt1, txt2):
    c=[a for a,b in list(zip(txt1,txt2)) if a!=b]
    return sorted(set(c),key=c.index)

print(find_broken_keys("happy birthday", "hawwy birthday"), ["p"])
print(find_broken_keys("starry night", "starrq light"), ["y", "n"])
print(find_broken_keys("beethoven", "affthoif5"), ["b", "e", "v", "n"])
print(find_broken_keys("mozart", "aiwgvx"), ["m", "o", "z", "a", "r", "t"])
print(find_broken_keys("5678", "4678"), ["5"], "It should work for numbers.")
print(find_broken_keys("!!??$$", "$$!!??"), ["!", "?", "$"], "It should work for punctuation.")
