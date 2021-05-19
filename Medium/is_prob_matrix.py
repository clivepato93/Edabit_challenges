# https://edabit.com/challenge/TJHwPqtA7DRGKJitB

def is_prob_matrix(lst):
    rows =len(lst)
    values=[val for row in lst for val in row]
    value_c=[val for row in lst for val in row]
    for i in values:
        if i <0 or i>1:
            return False
    if rows*rows!=len(value_c):
        return False
    return all(sum(row)==1 for row in lst)
    # elif
    # return sum(f)


print(is_prob_matrix(
[[0.5, 0.5, 0.0],
 [0.2, 0.5, 0.3]]),
False, "Not a square matrix.")
print(is_prob_matrix(
[[2, -1],
 [-1, 2]]),
False, "Entries are not probabilities.")

print(is_prob_matrix(
 [[0.5, 0.4],
  [0.5, 0.6]]),
False, "Rows do not add to 1.")

print(is_prob_matrix(
 [[0, 1],
  [1, 0]]),
True)

print(is_prob_matrix(
 [[2, 1],
  [1, 2]]),
False)

print(is_prob_matrix(
 [[1]]),
True)

print(is_prob_matrix(
[[0.5, 0.5, 0.0],
 [0.2, 0.5, 0.3],
 [0.1, 0.2, 0.7]]),
True)

print(is_prob_matrix(
[[0, 0, 0, 1],
 [0, 0, 0, 1],
 [0, 0, 0, 1],
 [0, 0, 0, 1]]),
True)

print(is_prob_matrix(
[[1, 0, 0, 1],
 [1, 0, 1, 1],
 [1, 1, 0, 1],
 [1, 0, 0, 1]]),
False)

print(is_prob_matrix(
[[0.5, 0.0, 0.5, 0.0],
 [0.1, 0.2, 0.3, 0.4],
 [0.3, 0.2, 0.2, 0.3],
 [0.0, 0.5, 0.0, 0.5]]),
True)
