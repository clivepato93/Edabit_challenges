# https://edabit.com/challenge/Dm7iqogzdGJTsaHZg
def retrieve(txt):
    sentence=txt.lower().replace('.',"").split()
    return [word for word in sentence if word[0] in "aeiou"]

print(retrieve("A simple life is a happy life for me."), ["a", "is", "a"])
print(retrieve("Exercising is a healthy way to burn off energy."), ["exercising", "is", "a", "off", "energy"])
print(retrieve("The poor ostrich was ostracized."), ["ostrich", "ostracized"])
print(retrieve(""), [])
