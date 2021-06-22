# https://edabit.com/challenge/arFpErP9oz36oTcXW

def secret(txt):
    f=txt.split(".")[0]
    r=txt.split(".")[1:]
    return "<{} class='".format(f)+" ".join(r)+"'></{}>".format(f)



print(secret("p.one.two.three"), "<p class='one two three'></p>")
print(secret("p.one"), "<p class='one'></p>")
print(secret("h3.one"), "<h3 class='one'></h3>")
print(secret("p.four.five"), "<p class='four five'></p>")
print(secret("p.a.b.c.d"), "<p class='a b c d'></p>")
print(secret("h1.a.b.c.d"), "<h1 class='a b c d'></h1>")
