# https://edabit.com/challenge/vQgmyjcjMoMu9YGGW
def simplify(txt):
    t=[int(i) for i in txt.split('/')]
    d=[i for i in range(2,t[1]+1) if not (t[0]%i) and not (t[1]%i)]
    if d:
        first=int(t[0]/d[-1])
        second=int(t[1]/d[-1])
        if second==1:
            return "{}".format(int(first/second))
        return "{}/{}".format(first,second)
    return txt
print(simplify("5/7"), "5/7")
print(simplify("4/6"), "2/3")
print(simplify("11/10"), "11/10")
print(simplify("8/4"), "2")
print(simplify("7/4"), "7/4", 'should work for improper fractions')
print(simplify("6/4"), "3/2")
print(simplify("300/200"), "3/2")
print(simplify("50/25"), "2")
print(simplify("5/45"), "1/9")
