# https://edabit.com/challenge/5fjAbvQwW3akZDior
def unrepeated(txt):
    return "".join(sorted(set(txt),key=txt.index))

print(unrepeated("hello"), "helo")
print(unrepeated("aaaaa"), "a")
print(unrepeated("WWE!!!"), "WE!")
print(unrepeated("call 911"), "cal 91")
print(unrepeated("altwaff test"), "altwf es")
print(unrepeated("Mississippi"), "Misp")
print(unrepeated("Tennessee"), "Tens")
print(unrepeated("Massachusetts"), "Maschuet")
