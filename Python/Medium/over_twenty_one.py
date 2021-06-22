def over_twenty_one(cards):
    ace="A"
    face=["J","K","Q"]
    n=0
    for card in cards:
        if card==ace:
            if n<=21:
                n+=1
            else:
                n+=11
        elif card in face:
            n+=10
        else:
            n+=card
    return n>22

print(over_twenty_one(['A', 2, 3]), False)
print(over_twenty_one(['A', 'J', 'K']), False)
print(over_twenty_one(['A', 'J', 'K', 'Q']), True)
print(over_twenty_one([5, 3, 6, 6, 7, 9]), True)
