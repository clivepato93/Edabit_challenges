def monkey_talk(txt):
    v='aeiou'
    return " ".join("eek" if word[0] in v else "ook" for word in txt.lower().split()).capitalize()+"."

print(monkey_talk("Mubashir Hassan"), "Ook ook.")
print(monkey_talk("Edabit is Amazing"), "Eek eek eek.")
print(monkey_talk("Matt"), "Ook.")
print(monkey_talk("Hello"), "Ook.")
print(monkey_talk("you are so beautiful"), "Ook eek ook ook.")
print(monkey_talk("Everyone"), "Eek.")
print(monkey_talk("Hello Everyone"), "Ook eek.")
print(monkey_talk("Everyone Hello"), "Eek ook.")
# Mubashir
