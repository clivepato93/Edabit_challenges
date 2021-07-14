# https://edabit.com/challenge/RfTvjipaoKBgEZvdZ
import re
def find_glasses(lst):
    glasses=re.compile(r'O{1}-+O{1}')
    for d in lst:
        match=glasses.search(d)
        if match:
            return lst.index(d)
    return 'Nothing Found'


print(find_glasses(['phone', 'O-O', 'coins', 'keys']), 1)
print(find_glasses(['OO', 'wallet', 'O##O', 'O----O']), 3)
print(find_glasses(['O_O', 'O-O', 'OwO']), 1)
print(find_glasses(['O--#--O', 'dustO---Odust', 'more dust']), 1)
print(find_glasses(['floor', 'the floor again', 'pockets', 'bed', 'cabinet', 'the top of my head O-O']), 5)
print(find_glasses(['OOOO----~OOO', '-------', 'OOOOOOO', 'OO-OO-OO-O']), 3)
