def forbidden_letter(char, lst):
    return len([True for word in lst if char not in word]) == len(lst)

print(forbidden_letter('e', ['rinse', 'and', 'repeat']), False)
