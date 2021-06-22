def dice_game(lst):
    lst=[value for row in lst for value in row]
    for number in range(1,len(lst)):
        if lst[number]==lst[number-1]:
            return 0
    return sum(lst)

# https://edabit.com/challenge/qeyinsjZHCPEddbfe

print(dice_game([(1, 2), (3, 4), (5, 6)]), 21)
print(dice_game([(1, 1), (5, 6), (6, 4)]), 0)
print(dice_game([(4, 5), (4, 5), (4, 5)]), 27)
print(dice_game([(1, 3), (4, 3), (5, 2)]), 18)
print(dice_game([(1, 3), (4, 3), (5, 5)]), 0)
print(dice_game([(1, 3), (4, 4), (5, 2)]), 0)
print(dice_game([(5, 6), (5, 6), (5, 6)]), 33)
