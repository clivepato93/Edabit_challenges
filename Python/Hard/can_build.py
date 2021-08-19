
# https://edabit.com/challenge/CD2fqbytBuXrbqJkL
# python3 -m doctest -v can_build.py
def can_build1(txt1, txt2):
    """
    >>> can_build("got 2 go","go go go 2 today")
    True

    >>> can_build("","go go go 2 today")
    True

    >>> can_build("dool","ken doll")
    False
    """
    lst= [l for r in [list(i*txt2.count(i)) for i in set(txt2) if i!=" "] for l in r]
    return all(txt2.count(l)>=txt1.count(l) for l in txt1.replace(' ',''))

print(can_build1("got 2 go", "go go go 2 today"), True)
print(can_build1("for an angel", "angel forest nymph awaken"), True)
print(can_build1("sit on top", "its a moo point"), True)
print(can_build1("solar to oven", "love desolate rose thorn"), True)
print(can_build1("gate im in", "magnetizing"), True)
print(can_build1("moreso", "mount rushmore"), True)
print(can_build1("dool", "ken doll"), False)
print(can_build1("world of make believe", "make believe world"), False)
print(can_build1("long high add or", "highway road go long"), False)
print(can_build1("fill tuck mid", "truck falls dim"), False)
print(can_build1("skin man i", "man in mask"), False)
print(can_build1("foolish prides", "foolish pride"), False)

# https://edabit.com/challenge/EHzL3v25wYp7E4AFC

def can_build(s1, s2):
    for l in set(s2):
        if s2.count(l)>s1.count(l):
            return False
    return True


print(can_build("aPPleAL", "PAL"), True)
print(can_build("OAT", "OAT"), True)
print(can_build("aPPleAL", "apple"), False)
