# https://edabit.com/challenge/izfXy5SGfeekmKExH
def puzzle_pieces(a1, a2):
    c=[a+b for a,b in zip(a1,a2)]
    return all(c[number-1]==c[number] for number in range(1,len(c))) if len(a1)==len(a2) else False

print(puzzle_pieces([1, 2, 3, 4], [4, 3, 2, 1]), True)
print(puzzle_pieces([9, 8, 7], [7, 8, 9, 10]), False)
