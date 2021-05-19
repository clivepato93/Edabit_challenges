# https://edabit.com/challenge/temD7SmTyhdmME75i
a='abcdefghijklmnopqrstuvwxyz'
def to_boolean_list(word):
    return [True if (a.index(i)+1)%2 else False for i in word]

actual_param = [
  "charming", "exquisite", "admire", "deep", "loves", "tesh",
  "xavier", "adores", "tesha", "esquire", "randomize", "exotic"
]
expected_param = [
  [True, False, True, False, True, True, False, True],
  [True, False, True, True, True, True, True, False, True],
  [True, False, True, True, False, True],
  [False, True, True, False],
  [False, True, False, True, True],
  [False, True, True, False],
  [False, True, False, True, True, False],
  [True, False, True, False, True, True],
  [False, True, True, False, True],
  [True, True, True, True, True, False, True],
  [False, True, False, False, True, True, True, False, True],
  [True, False, True, False, True, True]
]
for i, x in enumerate(actual_param): print(to_boolean_list(x), expected_param[i])
