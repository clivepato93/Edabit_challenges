# https://edabit.com/challenge/kSHpZ3KguSDSb5cwx
moves = ["Shimmy", "Shake", "Pirouette", "Slide", "Box Step", "Headspin", "Dosado", "Pop", "Lock", "Arabesque"]

def dance_convert(pin):
    if len(pin)!=4 or not pin.isdigit():
        return "Invalid input."
    f=[]
    for i,v in enumerate(pin):
        a=i+int(v)
        if a<=len(moves)-1:
            f.append(moves[a])
        else:
            a=i+int(v)-len(moves)
            f.append(moves[a])
    return f

# print(dance_convert("0000"), ['Shimmy', 'Shake', 'Pirouette', 'Slide'])
# print(dance_convert("5555"), ['Headspin', 'Dosado', 'Pop', 'Lock'])
print(dance_convert("8888"), ['Lock', 'Arabesque', 'Shimmy','Shake'])
# # below with one above bug
# print(dance_convert("0123"), ['Shimmy', 'Pirouette', 'Box Step', 'Dosado'])
# print(dance_convert("8765"), ['Lock', 'Lock', "Lock", 'Lock'])
# print(dance_convert("9104"), ['Arabesque', 'Pirouette', 'Pirouette', 'Pop'])
print(dance_convert("3619"), ['Slide', 'Pop', 'Slide', 'Pirouette'])
# below with one above bug
# print(dance_convert("9742"), ['Arabesque', 'Lock', 'Dosado', 'Headspin'])
# print(dance_convert("a95f"), "Invalid input.")
# print(dance_convert("834"), "Invalid input.")
# print(dance_convert("+493"), "Invalid input.")
# print(dance_convert("-324"), "Invalid input.")
