# https://edabit.com/challenge/M47FDJLjfNoZ6k6gF

def cup_swapping(swaps):
    p="B"
    for i in swaps:
        if p in i:
            p=i[i.index(p)-1]
    return p


print(cup_swapping(['AB', 'CA']), 'C')
print(cup_swapping(['AB', 'CA', 'AB']), 'C')
print(cup_swapping(['AC', 'CA', 'CA', 'AC']), 'B')
print(cup_swapping(['BA', 'AC', 'CA', 'BC']), 'A')
print(cup_swapping(['BC', 'CB', 'CA', 'BA']), 'A')
print(cup_swapping(['BC']), 'C')
print(cup_swapping(['BA', 'CA', 'CB', 'CA']), 'B')
print(cup_swapping([]), 'B')
