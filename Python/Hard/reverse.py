# https://edabit.com/challenge/G2hLjbHqwCo9TaS6T

def reverse(txt):
    lst=[i for i in txt if i.isalpha()][::-1]
    return ''.join(txt[i] if txt[i].isdigit() else lst.pop(0) for i in range(0,len(txt)))


print(reverse("ab89c"), "cb89a")
# print(reverse("jkl5mn923o"), "onm5lk923j")
# print(reverse("123a45"), "123a45")
# print(reverse("a1b1c"), "c1b1a")