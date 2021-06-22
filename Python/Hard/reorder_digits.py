def reorder_digits(lst, direction):
    return [int(''.join(str(x) for x in sorted(map(int,str(i)),reverse= direction=='desc'))) for i in lst]


print(reorder_digits([515, 341, 98, 44, 211], 'asc'), [155, 134, 89, 44, 112])
print(reorder_digits([515, 341, 98, 44, 211], 'desc'), [551, 431, 98, 44, 211])
print(reorder_digits([63251, 78221], 'asc'), [12356, 12278])
print(reorder_digits([63251, 78221], 'desc'), [65321, 87221])
print(reorder_digits([1, 2, 3, 4], 'asc'), [1, 2, 3, 4])
print(reorder_digits([1, 2, 3, 4], 'desc'), [1, 2, 3, 4])
print(reorder_digits([12, 21, 15, 51], 'asc'), [12, 12, 15, 15])
print(reorder_digits([12, 21, 15, 51], 'desc'), [21, 21, 51, 51])
