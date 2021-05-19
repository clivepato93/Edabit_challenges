# https://edabit.com/challenge/mgBdGGw7StxF2tBqu
def duplicates(txt):
    total=0
    letters=set()
    for letter in txt:
        if txt.count(letter)>1:
            letters.add(letter)
            total+=1
    # print(txt)
    # print(letters)
    return total-len(letters)

def duplicates(txt):
    lst=[letter for letter in txt if txt.count(letter)>1]
    return len(lst)-len(set(lst))



print(duplicates("Hello World!"), 3)
print(duplicates("birthday"), 0)
print(duplicates("helicopter"), 1)
print(duplicates("foobar"), 1)
print(duplicates("The Quick Brown Fox Jumps Over the Lazy Dog"), 14)
print(duplicates("donald trump"), 1)
print(duplicates("Row, row, row your boat Gently down the stream Merrily merrily, merrily, merrily Life is but a dream."), 77)
print(duplicates("Gen'rals gathered in their masses,Just like witches at black masses"), 45)
print(duplicates("Evil minds that plot destruction,Sorcerer of death's construction"), 43)
print(duplicates("gamer"), 0)
print(duplicates("gamer gang"), 3)
