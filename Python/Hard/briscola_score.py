# https://edabit.com/challenge/vZJJjYWtzYCBEnnGY

# Ace: 11 points
# Three: 10 points
# King: 4 points
# Queen: 3 points
# Jack: 2 points
# Any other card has no value (0 points).

def briscola_score(my_deck1, my_deck2):
    target = 120
    total = 0
    d = {"3": 10, "A": 11, "K": 4, "Q": 3, "J": 2}
    total += sum(d.get(card[0], 0) for card in my_deck1)
    target -= total
    total += sum(d.get(card[0], 0) for card in my_deck2)

    if total == 120:
        return "Draw!"
    elif total > 120:
        return "You Win!"
    else:
        return "You Lose!"


print(briscola_score(["3c", "3s", "Qd", "Jh", "5d", "Jc", "6d", "Ad", "Js", "Qc"], [
      "Jd", "Kd", "4c", "6s", "Ks", "5c", "3d", "As", "Jh", "6h"]), "You Lose!", "Example #1")
print(briscola_score(["Ac", "As", "3d", "3h", "3s", "Ah", "Kd"], [
      "3d", "Ad", "Ac", "As", "Ah"]), "You Win!", "Example #2")
print(briscola_score(["Ac", "As", "3d", "3h", "3s", "Ah", "Kd"], [
      "3d", "Ad", "Ac", "As", "3h"]), "Draw!", "Example #3")
print(briscola_score(["4h", "4s", "7s", "3d", "2c", "As", "3c", "4c", "Ah", "7h", "Kc", "Jc", "Qh", "Jd", "Ks"], ["4s", "Ah", "Qh", "7c",
                                                                                                                  "6s", "Js", "6d", "Qc", "5d", "Kd", "3d", "Ac", "4c", "5s", "3h", "6h", "As", "7d", "2s", "2c", "3c", "6c", "7h", "Kc"]), "You Win!")
print(briscola_score(["Js", "Qc", "2c", "Kc", "Kh", "7c", "5h", "Jh", "2s", "6d", "4s", "4c", "Kd", "6s", "Ks", "Qh", "7s",
                      "Jc", "5c", "5d", "6c", "2h", "Ad", "7d", "Ah", "5s", "3s", "6h"], ["As", "3c", "Kd", "Ac", "Ah", "Ad", "Jh"]), "Draw!")
print(briscola_score(["3c", "3s", "Qd", "Jh", "5d", "Jc", "6d", "Ad", "Js", "Qc"], [
      "2s", "Kd", "3d", "6s", "Qc", "5c", "6d", "6h", "6c", "5h", "Qd", "4s", "3c", "2h", "3s"]), "You Lose!")
