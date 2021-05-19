# https://edabit.com/challenge/GZhSDwwLwakxjpnoB
def thirdthird(lst):
    try:
        return lst[2][2]
    except:
        return False

def thirdthird(lst):
    return lst[2][2] if len(lst)>=3 and len(lst[2])>=3 else False

def thirdthird(lst):
    return len(lst)>=3 and len(lst[2])>=3 and lst[2][2]


lst1 = ['eda', 'bit', 'edabit', 'bit', 'eda']
lst2 = ['Nel', 'mezzo', 'del', 'cammin', 'di', 'nostra', 'vita']
lst3 = ['I', 'dont', 'know', 'what', 'to', 'write']
lst4 = ['Pikachu', 'Bulbasaur', ':)', 'Charmander', 'Squirtle']
lst5 = ['Wode', 'Maya']
lst6 = []

print(thirdthird(lst1), 'a')
print(thirdthird(lst2), 'l')
print(thirdthird(lst3), 'o')
print(thirdthird(lst4), False)
print(thirdthird(lst5), False)
print(thirdthird(lst6), False)
