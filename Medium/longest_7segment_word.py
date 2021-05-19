# https://edabit.com/challenge/kAQT4vMX2iEAcs8uJ

def longest_7segment_word(lst):
    c=[word for word in lst  if all(letter not in 'kmvwx'for letter in word)]
    return max(c,key=len) if c else ""



print(longest_7segment_word(["coding", "crackers", "edabit", "celebration"]), "celebration")
print(longest_7segment_word(["velocity", "mackerel", "woven", "kingsmen"]), "")
print(longest_7segment_word(["embarrassment", "perceive", "front"]), "front")
print(longest_7segment_word(["truck", "accessible", "undermine", "unique", "tear", "cat", "avenue", "labour", "goat", "dance", "rise", "scale"]), "accessible")
print(longest_7segment_word(["act", "adjust", "proud", "battery", "tear", "beautiful", "avenue", "thoughtful", "victory", "mobile", "straight"]), "thoughtful")
print(longest_7segment_word(["fair", "tear", "truck"]), "fair")
print(longest_7segment_word(["scale", "pass", "act", "sector", "vain", "scale"]), "sector")
