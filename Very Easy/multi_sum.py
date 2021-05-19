# https://edabit.com/challenge/swRynR33w7ycQemyc


# def multi_sum(n, ten = 10):
#     total = 0
#     for index in range(1,ten+1):
#         total+=(n*index)
#     return total

def multi_sum(n, ten = 10):
  if ten == 0:return 0
  # print(ten * n + multi_sum(n, ten - 1))
  return ten * n + multi_sum(n, ten - 1)

print(multi_sum(2), 110)
