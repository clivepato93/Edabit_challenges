# https://edabit.com/challenge/6pEGXsuCAxbWTRkgc


def loves_me(n):
    l=["Loves me" if i%2 else "Loves me not" for i in range(1,n+1)]
    l[-1]=l[-1].upper()
    return ', '.join(i for i in l)



print(loves_me(1), "LOVES ME")
print(loves_me(2), "Loves me, LOVES ME NOT")
print(loves_me(3), "Loves me, Loves me not, LOVES ME")
print(loves_me(4), "Loves me, Loves me not, Loves me, LOVES ME NOT")
print(loves_me(5), "Loves me, Loves me not, Loves me, Loves me not, LOVES ME")
print(loves_me(6), "Loves me, Loves me not, Loves me, Loves me not, Loves me, LOVES ME NOT")
print(loves_me(7), "Loves me, Loves me not, Loves me, Loves me not, Loves me, Loves me not, LOVES ME")
