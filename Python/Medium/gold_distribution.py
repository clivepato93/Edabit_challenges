
# https://edabit.com/challenge/bJxNHk7aovkx8Q776

def gold_distribution(gold):
    mu=0
    ma=0
    while len(gold)!=0:
        mu+=gold.pop(gold.index(max(gold[0],gold[-1])))
        ma+=gold.pop(gold.index(max(gold[0],gold[-1])))
    return [mu,ma]


# print(gold_distribution([4, 2, 9, 5, 2, 7]), [14, 15])
print(gold_distribution([4, 7, 2, 9, 5, 2]), [11, 18])
# print(gold_distribution([10, 1000, 2, 1]), [12, 1001])
print(gold_distribution([10, 9, 1, 2, 8, 4]), [16, 18])
# print(gold_distribution([9, 32, 12, 43, 1, 55]), [130, 22])
# print(gold_distribution([19, 22, 1, 5, 7, 31]), [58, 27])
# print(gold_distribution([2, 2, 2, 2, 2, 2]), [6, 6])
# Mubashir
