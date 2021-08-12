# https://edabit.com/challenge/9zf6scCreprSaQAPq

def sort_by_answer(lst):
    return sorted(lst, key=lambda i: eval(i.replace("x", "*")))


print(sort_by_answer(["1 + 1", "1 + 7", "1 + 5", "1 + 4"]),
      ["1 + 1", "1 + 4", "1 + 5", "1 + 7"])
print(sort_by_answer(["2 + 2", "2 - 2", "2 x 2", "2 / 2"]),
      ["2 - 2", "2 / 2", "2 + 2", "2 x 2"])
print(sort_by_answer(["1 x 1", "3 x 3", "-1 x -1", "-3 x -3"]),
      ["1 x 1", "-1 x -1", "3 x 3", "-3 x -3"])
print(sort_by_answer(["4 - 4", "2 - 2", "5 - 5", "10 - 10"]), ["4 - 4", "2 - 2", "5 - 5",
                                                               "10 - 10"], "The answers are all the same, so return the elements in the order they came")
