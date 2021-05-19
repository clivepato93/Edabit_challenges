# https://edabit.com/challenge/cAYMDMFgTHuZJw2o4
def reverse_image(image):
    return [[0 if val else 1 for val in row] for row in image]


print(reverse_image([
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1]
]), [
  [0, 1, 1],
  [1, 0, 1],
  [1, 1, 0]
])
