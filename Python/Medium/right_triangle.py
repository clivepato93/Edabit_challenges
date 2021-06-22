# https://edabit.com/challenge/mPpcATtDMYiegZ3Jw


def right_triangle(x, y, z):
    c=sorted([x,y,z])
    x,y,z=c
    if any(i==0 or i<0 for i in c ):
        return False
    return x**2+y**2==z**2



print(right_triangle(3, 4, 5), True)
print(right_triangle(145, 105, 100), True)
print(right_triangle(70, 130, 110), False)
print(right_triangle(60, 60, 60), False)
print(right_triangle(0, 4, 4), False, "A triangle can't have an edge of length 0.")
print(right_triangle(-3, 4, 5), False, "A triangle can't have edges of negative length.")
print(right_triangle(115, 277, 252), True)
print(right_triangle(140, 170, 220), False)
print(right_triangle(915, 1748, 1973), True)
