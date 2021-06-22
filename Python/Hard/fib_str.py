# https://edabit.com/challenge/kozqCJFi4de2JnR26
def fib_str(n, t):
    a=t[0]
    b=t[1]
    for i in range(n-2):
        a,b=b,b+a
        t.append(b)
    return ", ".join(t)



print(fib_str(3, ["j", "h"]), "j, h, hj")
print(fib_str(5, ["e", "a"]), "e, a, ae, aea, aeaae")
print(fib_str(6, ["n", "k"]), "n, k, kn, knk, knkkn, knkknknk")
print(fib_str(7, ["f", "c"]), "f, c, cf, cfc, cfccf, cfccfcfc, cfccfcfccfccf")
print(fib_str(9, ["b", "a"]), "b, a, ab, aba, abaab, abaababa, abaababaabaab, abaababaabaababaababa, abaababaabaababaababaabaababaabaab")
print(fib_str(11, ["z", "x"]), "z, x, xz, xzx, xzxxz, xzxxzxzx, xzxxzxzxxzxxz, xzxxzxzxxzxxzxzxxzxzx, xzxxzxzxxzxxzxzxxzxzxxzxxzxzxxzxxz, xzxxzxzxxzxxzxzxxzxzxxzxxzxzxxzxxzxzxxzxzxxzxxzxzxxzxzx, xzxxzxzxxzxxzxzxxzxzxxzxxzxzxxzxxzxzxxzxzxxzxxzxzxxzxzxxzxxzxzxxzxxzxzxxzxzxxzxxzxzxxzxxz")
