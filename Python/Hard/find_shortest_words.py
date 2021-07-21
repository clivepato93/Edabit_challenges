# https://edabit.com/challenge/ivWdkjsHtKSMZuNEc

def find_shortest_words(txt):
    txt=txt.replace('.',"")
    a=min(txt.replace('.',"").split(),key=len)
    # return a
    return sorted([i.lower() for i in txt.split() if len(i)==len(a) and all(x.isalpha() for x in i) ])


print(find_shortest_words("Strive not to be a success, but rather to be of value."), ['a'])
print(find_shortest_words("You miss 100% of the shots you don't take."), ['of'])
print(find_shortest_words("Life is what happens to you while you're busy making other plans."), ['is', 'to'])
print(find_shortest_words("We become what we think about."), ['we', 'we'])
print(find_shortest_words("The most common way people give up their power is by thinking they don't have any."), ['by', 'is', 'up'])
print(find_shortest_words("The best time to plant the tree was 20 years ago. The second best time is now."), ['is', 'to'])
print(find_shortest_words("The only person you are destined to become is the person you decide to be."), ['be', 'is', 'to', 'to'])
