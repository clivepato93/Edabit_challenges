def primorial(n):
    lst=[]
    c=1
    x=2
    while len(lst)!=n:
        if len([i for i in range(1,x+1) if x%i==0])<=2:
            lst.append(x)

        x+=1
    for a in lst:
        c=c*a
    return c


print(primorial(1), 2)
print(primorial(2), 6)
print(primorial(3), 30)
print(primorial(8), 9699690)
print(primorial(20),557940830126698960967415390)
