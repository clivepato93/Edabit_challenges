# https://edabit.com/challenge/YRwZvg5Pkgw4pEWC5
# Create a function that always returns True for every item in a given list.
# However, if an element is the word "flick", switch to always returning the opposite boolean value.
'''
Notes
"flick" will always be given in lowercase.
A list may contain multiple flicks.
Switch the boolean value on the same element as the flick itself.
'''

def flick_switch(lst):
    final = []
    truthy = True
    for item in lst:
        if item == "flick":
            truthy = not(truthy)
            final.append(truthy)
        else:
            final.append(truthy)
    return final

# print(flick_switch(['edabit', 'flick', 'eda', 'bit']), [True, False, False, False])
print(flick_switch([False, False, 'flick', 'sheep', 'flick']))
