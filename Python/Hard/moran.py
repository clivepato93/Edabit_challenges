# https://edabit.com/challenge/YTf8DZbTkzJ3kizNa

def moran(n):
    string=sum(int(i) for i in str(n))
    string2=n%string
    s=n//string
    def isprime(s):
        if s==1:
            return False
        lst=[]
        for i in range(2,int(s*0.5)):
            if float(s%i)==0:
                lst.append(i)
        return False if lst else True
    # print(string2,n//string)
    # print(isprime(s))
    return 'H' if string2==0 and not isprime(s) else "M" if string2==0 and isprime(s)  else 'Neither'



print(moran(132), "H")
print(moran(133), "M")
print(moran(134), "Neither")
print(moran(3033), "M")
print(moran(3030), "H")
print(moran(491423), "Neither")
print(moran(20937), "M")

print(round(2**0.5))
