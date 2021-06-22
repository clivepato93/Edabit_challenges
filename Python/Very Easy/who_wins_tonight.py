# https://edabit.com/challenge/Fe4dD4xrdBJjQ7H9a
def who_wins_tonight(coins, space, price, size):
    bill=round(coins//price)
    will=round(space//size)
    print(will,bill)
    if bill > will:
        return "Bill"
    elif will > bill:
        return "Will"
    return "Tie"

print(who_wins_tonight(20, 20, 5, 10), 'Bill')
print(who_wins_tonight(30, 100, 1, 50), 'Bill')
print(who_wins_tonight(90, 10, 2, 5), 'Bill')

print(who_wins_tonight(10, 2, 20, 1), 'Will')
print(who_wins_tonight(40, 100, 5, 10), 'Will')
print(who_wins_tonight(5, 5, 5, 2), 'Will')

print(who_wins_tonight(3, 7, 2, 5), 'Tie')
print(who_wins_tonight(50, 50, 49, 26), 'Tie')
print(who_wins_tonight(100000, 100000, 1, 1), 'Tie')
