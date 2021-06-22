# https://edabit.com/challenge/QWAqDyd9RXqyrNyo3
def abbreviate(sentence, n=4):
    return "".join(word[0].upper() for word in sentence.split() if len(word)>=n)

print(abbreviate("do it yourself", 2), "DIY")
print(abbreviate("attention AND deficit OR hyperactivity THE disorder"), "ADHD")
print(abbreviate("the acronym of long word lengths", 5), "AL")
print(abbreviate("laugh out loud"), "LL")
print(abbreviate("Keep It Simple Stupid"), "KSS")
print(abbreviate("laugh out loud", 3), "LOL")
print(abbreviate("Keep It Simple Stupid",2), "KISS")
