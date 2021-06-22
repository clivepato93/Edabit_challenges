# https://edabit.com/challenge/x5o7jTvzXjujvrh6t
def i_sqrt(n):
    c=0
    while n>2:
        n**=(1/2.0)
        c+=1
        print(c,n)


print(i_sqrt(1), 0, "Example 1")
print(i_sqrt(2), 1, "Example 2")
print(i_sqrt(7), 2, "Example 3")
print(i_sqrt(27), 3, "Example 4")
print(i_sqrt(256), 4, "Example 5")
print(i_sqrt(-1), "invalid", "Example 6")
print(i_sqrt(25), 3)
print(i_sqrt(59), 3)
print(i_sqrt(113), 3)
print(i_sqrt(253), 3)
