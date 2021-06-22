# https://edabit.com/challenge/SdGE4ZBtuMKyxDqQ6

def first_repeat(chars):
    return [v for i,v in enumerate(chars) if chars.count(v)>1][0] if [v for i,v in enumerate(chars) if chars.count(v)>1] else "-1"

def first_repeat(chars):
    for i in chars:
        if chars.count(i)>1:
            return i
    return '-1'

print(first_repeat("legolas"), "l")
print(first_repeat("Balrog"), "-1")
print(first_repeat("Isildur"), "-1")
print(first_repeat("Gollum"), "l")
print(first_repeat("Galadriel"), "a")
print(first_repeat("pippin"), "p")
print(first_repeat("Saruman"), "a")
