# https://edabit.com/challenge/hC6yGEPvtN2izt3c9
def is_mini_sudoku(s):
    return sum(i for r in s for i in r)==45

print(is_mini_sudoku(
[[1, 3, 2],
[9, 7, 8],
[4, 5, 6]]), True)
print(is_mini_sudoku(
[[1, 1, 3],
[6, 5, 4],
[8, 7, 9]]), False)
print(is_mini_sudoku(
[[0, 1, 2],
[6, 4, 5],
[9, 8, 7]]), False)
print(is_mini_sudoku(
[[8, 9, 2],
[5, 6, 1],
[3, 7, 4]]), True)
print(is_mini_sudoku(
[[2, 3, 4],
[6, 7, 7],
[8, 9, 1]]), False)
print(is_mini_sudoku(
[[6, 5, 9],
[4, 3, 8],
[2, 1, 7]]), True)
print(is_mini_sudoku(
[[4, 3, 5],
[8, 1, 2],
[9, 6, 7]]), True)
print(is_mini_sudoku(
[[4, 3, 5],
[8, 6, 2],
[9, 6, 7]]), False)
