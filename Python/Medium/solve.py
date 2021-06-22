# https://edabit.com/challenge/fpJXv7Qn9LCxX8FYq
def solve(eq):
    q=eq.split()
    op={"+":"-",
        "-":"+"}
    return eval(q[-1]+op.get(q[1])+q[2])


print(solve("x + 43 = 50"), 7)
print(solve("x - 9 = 10"), 19)
print(solve("x + 300 = 100"), -200)
print(solve("x - 0 = 0"), 0)
print(solve("x + 188 = 866"), 678)
print(solve("x + -500 = -200"), 300)
