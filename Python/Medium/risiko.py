# https://edabit.com/challenge/TY2mJcZR8LBWepu7T


def risiko(attacker, defender):
    return sum(a>b for a,b in list(zip(sorted(attacker,reverse=True),sorted(defender,reverse=True))))



print(risiko([3, 6, 4], [2, 5, 3]), 3, "Example #1")
print(risiko([3, 6], [6, 4, 4]), 0, "Example #2")
print(risiko([3, 1], [1]), 1, "Example #3")
print(risiko([4, 4, 3], [3, 2]), 2)
print(risiko([5], [3, 1, 4]), 1)
print(risiko([3, 5], [3, 5]), 0)
print(risiko([3, 6, 6], [6]), 0)
print(risiko([5, 4], [3, 4, 3]), 2)
print(risiko([3], [2, 1]), 1)
print(risiko([3, 3, 3], [2, 1, 2]), 3)
