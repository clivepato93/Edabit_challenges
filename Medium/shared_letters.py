# https://edabit.com/challenge/wvuk7d2mWgZEmFFYD
# '''Create a function that returns the number of characters shared between two words.'''
#
# def shared_letters(txt1, txt2):
#     return len(set(txt1).intersection(set(txt2)))
#
#
#
# print(shared_letters("apple", "meaty"), 2, "Test 1")
# print(shared_letters("fan", "forsook"), 1, "Test 2")
# print(shared_letters("spout", "shout"), 4, "Test 3")
# print(shared_letters("took", "taken"), 2, "Test 4")
# print(shared_letters("mentor", "terminal"), 5, "Test 5")
# print(shared_letters("class", "last"), 3, "Test 6")

# https://edabit.com/challenge/XgJ3L3GF7o2dEaPAW
def shared_letters(a, b):
    a,b=sorted(a.lower()),sorted(b.lower())
    return "".join(sorted(set(a).intersection(set(b))))

print(shared_letters('house', 'home'), 'eho')
print(shared_letters('Micky', 'mouse'), 'm')
print(shared_letters('house', 'villa'), '')
print(shared_letters('Aa', 'aA'), 'a')
print(shared_letters('https://www.example.com', 'https://www.canada.ca'), './:achpstw')
print(shared_letters('Edabit', 'Matt'), 'at')
print(shared_letters('Javascript', 'Swift'), 'ist')
print(shared_letters('Functional programming', 'Object oriented programming'), ' acgimnoprt')
