
# https://edabit.com/challenge/CD2fqbytBuXrbqJkL
# python3 -m doctest -v can_build.py
def can_build(txt1, txt2):
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

print(can_build("","go go go 2 today"))
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
