# https://edabit.com/challenge/uugzpwJXKdiESZbjM
def is_full_house(hand):
    c=list(set(hand))
    # print(c[0])
    if len(c)>2:
        return False
    return True if hand.count(c[0])==2 or hand.count(c[0])==3 else False
print(is_full_house(['A', 'A', 'A', 'K', 'K']), True)
print(is_full_house(['3', 'J', 'J', '3', '3']), True)
print(is_full_house(['10', 'J', '10', 'J', '10']), True)
print(is_full_house(['10', 'J', '10', '10', '10']), False)
print(is_full_house(['10', 'J', 'J', '2', '2']), False)
print(is_full_house(['7', 'J', '3', '4', '2']), False)
