
# https://edabit.com/challenge/CD2fqbytBuXrbqJkL
def can_build(txt1, txt2):
    txt1=txt1.replace(" ","")
    txt2=txt2.replace(" ","")
    return all(i in txt2 for i in list(set(txt1)))



print(can_build("got 2 go", "go go go 2 today"), True)
print(can_build("for an angel", "angel forest nymph awaken"), True)
print(can_build("sit on top", "its a moo point"), True)
print(can_build("solar to oven", "love desolate rose thorn"), True)
print(can_build("gate im in", "magnetizing"), True)
print(can_build("moreso", "mount rushmore"), True)
print(can_build("dool", "ken doll"), False)
print(can_build("world of make believe", "make believe world"), False)
print(can_build("long high add or", "highway road go long"), False)
print(can_build("fill tuck mid", "truck falls dim"), False)
print(can_build("skin man i", "man in mask"), False)
print(can_build("foolish prides", "foolish pride"), False)
