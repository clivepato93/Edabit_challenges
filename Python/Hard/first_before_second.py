# https://edabit.com/challenge/D6XfxhRobdQvbKX4v
def first_before_second(s, f, se):
    l=[(v) for i,v in enumerate(s) if v ==f or se==v]
    for i in range(1,len(l)):
        if l[i-1]==se and l[i]==f:
            return False
    return True
print(first_before_second("a rabbit jumps joyfully", "a", "j"), True)
print(first_before_second("knaves knew about waterfalls", "k", "w"), True)
print(first_before_second("maria makes money", "m", "o"), True)
print(first_before_second("the hostess made pecan pie", "h", "p"), True)
print(first_before_second("barry the butterfly flew away", "b", "f"), True)
print(first_before_second("moody muggles", "m", "g"), True)

print(first_before_second("happy birthday", "a", "y"), False)
print(first_before_second("precarious kangaroos", "k", "a"), False)
print(first_before_second("maria makes money", "m", "i"), False)
print(first_before_second("taken by the beautiful sunrise", "u", "s"), False)
print(first_before_second("sharp cheddar biscuit", "t", "s"), False)
print(first_before_second("moody muggles", "m", "o"), False)
