
# https://edabit.com/challenge/jJuMKJcS4TwoKA6Ju

def dial(txt):
    d={"a":"2",
    "b":"2",
    "c":"2",
    "d":"3",
    "e":"3",
    "f":"3",
    "g":"4",
    "h":"4",
    "i":"4",
    "j":"5",
    "k":"5",
    "l":"5",
    "m":"6",
    "n":"6",
    "o":"6",
    "p":"7",
    "q":"7",
    "r":"7",
    "s":"7",
    "t":"8",
    "u":"8",
    "v":"8",
    "w":"9",
    "x":"9",
    "y":"9",
    "z":"9"}

    f=""
    for i in txt.lower():
        if i in d:
            f+=d[i]
        else:
            f+=i
    return f


print(dial("1-800-HOTLINEBLING"), "1-800-468546325464")
print(dial("hello-world!"), "43556-96753!")
print(dial("aaaabcccdefggg"), "22222222333444")
print(dial("01023468adghijgkmz?"), "010234682344454569?")
print(dial("SwApPeDcAsE"), "79277332273")
print(dial("VAPORWAVE"), "827679283")
