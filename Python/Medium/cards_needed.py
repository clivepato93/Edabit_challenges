# https://edabit.com/challenge/kPDSPe9cHwbE2jANs

def cards_needed(n):
    return n*(n*3+1)/2 if n>=0 else "invalid"

print(cards_needed(-3), "invalid")
print(cards_needed(-2), "invalid")
print(cards_needed(-1), "invalid")
print(cards_needed(0), 0)
print(cards_needed(1), 2)
print(cards_needed(2), 7)
print(cards_needed(3), 15)
print(cards_needed(4), 26)
print(cards_needed(5), 40)
