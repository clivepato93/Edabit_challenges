def determine_lever(l):
    lever = ''.join(letter for letter in l)
    if lever == 'efl':
        return "first class lever"
    elif level == 'elf':
        return "second class lever"
    else:
        return "third class lever"

# https://edabit.com/challenge/NAhsYH4q4jtaQB7Bf


print(determine_lever(["e", "f", "l"]), "first class lever")
print(determine_lever(["e", "l", "f"]), "second class lever")
print(determine_lever(["f", "e", "l"]), "third class lever")
