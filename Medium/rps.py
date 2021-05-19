# could improve this
# https://edabit.com/challenge/sfqudQHQ3HPpd7dZb
def rps(p1, p2):
    if p1==p2:
        return "It's a draw"
    elif p1=="Rock" and p2=="Paper":
        return "The winner is p2"
    elif p1=="Scissors" and p2=="Rock":
        return "The winner is p2"
    elif p1=="Scissors" and p2=="Paper":
        return "The winner is p1"
    elif p1=="Paper" and p2=="Rock":
        return "The winner is p1"


print(rps("Rock", "Paper"), "The winner is p2")
print(rps("Scissors", "Rock"), "The winner is p2")
print(rps("Scissors", "Paper"), "The winner is p1")
print(rps("Paper", "Rock"), "The winner is p1")
print(rps("Paper", "Paper"), "It's a draw")
print(rps("Rock", "Rock"), "It's a draw")
