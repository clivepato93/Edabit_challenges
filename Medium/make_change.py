# https://edabit.com/challenge/QDw3YayxCNqGaC9ji

def make_change(c):
    d={"q":25,
       "d":10,
       "n":5,
       "p":1}
    o="qdnp"
    for k in o:
        a=d[k]
        d[k]=int(c/d[k])
        c-=(a*d[k])
    return d

print(make_change(47), { "q": 1, "d": 2, "n": 0, "p": 2 })
# print(make_change(24), { "q": 0, "d": 2, "n": 0, "p": 4 })
# print(make_change(92), { "q": 3, "d": 1, "n": 1, "p": 2 })
# print(make_change(99), { "q": 3, "d": 2, "n": 0, "p": 4 })
# print(make_change(87), { "q": 3, "d": 1, "n": 0, "p": 2 })
# print(make_change(15), { "q": 0, "d": 1, "n": 1, "p": 0 })
# print(make_change(25), { "q": 1, "d": 0, "n": 0, "p": 0 })
# print(make_change(36), { "q": 1, "d": 1, "n": 0, "p": 1 })
