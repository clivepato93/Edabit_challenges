

def is_disarium(n):
    return n==sum(int(v)**i for i,v in enumerate(str(n),start=1))




num_vector, res_vector = [
  [6, 75, 135, 466, 372, 175, 1, 696, 876, 89, 518, 598],
  [True, False, True, False, False, True, True, False, False, True, True, True]
]
for i, n in enumerate(num_vector): print(is_disarium(n), res_vector[i])
