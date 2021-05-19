# https://edabit.com/challenge/oGkwLhmpys95rjtQ2
def match_last_item(lst):
    return "".join(str(item) for item in lst[:-1])==lst[-1]

print(match_last_item(['rsq', '6hi', 'g', 'rsq6hig']), True)
print(match_last_item([0, 1, 2, 3, 4, 5, '12345']), False)
print(match_last_item(['for', 'mi', 'da', 'bel', 'formidable']), False)
print(match_last_item([8, 'thunder', True, '8thunderTrue']), True)
print(match_last_item([ 1, 1, 1, '11' ]), False)
print(match_last_item(['tocto','G8G','xtohkgc','3V8','ctyghrs',100.88,'fyuo','Q','toctoG8Gxtohkgc3V8ctyghrs100.88fyuoQ']), True)
