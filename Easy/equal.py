def equal(a, b, c):
    l = [a,b,c]
    if len(set(l))==1:
        return 3
    elif l.count(a)==2 or l.count(c)==2:
        return 2
    else:
        return 0

# https://edabit.com/challenge/b8wRDMWgMZTN2nmfx

print(equal(2,3,4), 0, "All values are differents")
print(equal(7,3,7), 2, "Two values are equal")
print(equal(4,4,4), 3, "All 3 values are equal")
print(equal(7,3,4), 0, "All values are differents")
print(equal(3,3,6), 2, "Two values are equal")
print(equal(1,1,1), 3, "All 3 values are equal")
print(equal(1,7,6), 0, "All values are differents")
print(equal(7, 7, 7), 3, "All 3 values are equal")
print(equal(6, 3, 3), 2, "Two values are equal")
