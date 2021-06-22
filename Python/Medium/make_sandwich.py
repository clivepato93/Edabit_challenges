# https://edabit.com/challenge/cGaTqHsPfR5H6YBuj
import itertools
def make_sandwich(i, f):
    final=[]
    for val in i:
        if val==f:
            final.append(["bread",val,"bread"])
        else:
            final.append(val)
    return list(itertools.chain(*final))


print(make_sandwich(["t", "h", "t"], "h"),["t", "bread", "h", "bread", "t"])
print(make_sandwich(["c", "l"], "c"), ["bread", "c", "bread", "l"])
print(make_sandwich(["h", "h"], "h"), ["bread", "h", "bread", "bread", "h", "bread"])
