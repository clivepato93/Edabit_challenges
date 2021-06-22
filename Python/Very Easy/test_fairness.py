from functools import reduce


def test_fairness(agatha,bertha):
    n =sum([x*y for x,y in agatha])
    # n =sum([x[0]*x[1] for x in agatha])
    c =sum([x*y for x,y in bertha])
    return n==c
print(test_fairness([[1,5], [6,3], [1,1]], [[7,1], [2,2], [1,1]]), False)
print(test_fairness([[2,2], [2,2], [2,2], [2,2]], [[4,4]]), True)
print(test_fairness([[1,2], [2,1]], [[2,2]]), True)
print(test_fairness([[1,2], [2,1]], [[2,2], [4,4]]), False)
print(test_fairness([[2,4], [1,1], [11,1]], [[2,2], [4,4]]), True)
print("\n")

def is_symmetrical(num):
    return str(num) == "".join(reversed(str(num)))


print(is_symmetrical(23), False)
print(is_symmetrical(9562), False)
print(is_symmetrical(10019), False)
print(is_symmetrical(1), True)
print(is_symmetrical(3223), True)
print(is_symmetrical(95559), True)
print(is_symmetrical(66566), True)


def card_hide(card):
    x = ''.join(["*" for i in range(len(card[:-4]))])+"".join(card[-4:])
    # x=list(card[:-4])
    # x=x.replace(i for i in x,'*')
    return x
    # return "".join(card[:-4])+"".join(card[-4:])


print(card_hide("1234123456785678"), "************5678")
print(card_hide("8754456321113213"), "************3213")
print(card_hide("35123413355523"), "**********5523")
