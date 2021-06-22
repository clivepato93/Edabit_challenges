# https://edabit.com/challenge/Rg26hsPPXXqpho3g2
def which_is_larger(f, g):
    return "f" if f()>g() else "g" if g()>f() else "neither"

print(which_is_larger(lambda: 5, lambda: 10),'g')
print(which_is_larger(lambda: 10, lambda: 5),'f')
print(which_is_larger(lambda: 25, lambda: 25),'neither')
print(which_is_larger(lambda: -100, lambda: -100),'neither')
print(which_is_larger(lambda: -100, lambda: 0),'g')
print(which_is_larger(lambda: 505050, lambda: 5050),'f')
print(which_is_larger(lambda: 100, lambda: 1000),'g')
