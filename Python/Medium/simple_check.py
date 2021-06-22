# https://edabit.com/challenge/hQRuQguN4bKyM2gik
def simple_check(a, b):
    c=0
    l=sorted([a,b])[::-1]
    while l[-1]!=0:
        if l[0]%l[-1]==0:
            c+=1
        l[-1]-=1
        l[0]-=1
        # l[-1]-=1
    return c


print(simple_check(3, 5), 2, "For numbers 3 and 5 the result should be 2")
print(simple_check(10, 1), 1, "For numbers 10 and 1 the result should be 1")
print(simple_check(7, 7), 7, "For numbers 7 and 7 the result should be 7")
print(simple_check(16, 32), 5, "For numbers 16 and 32 the result should be 5")
print(simple_check(42, 21), 4, "For numbers 42 and 21 the result should be 4")
print(simple_check(54, 17), 1, "For numbers 54 and 17 the result should be 1")
print(simple_check(150080, 150032), 10, "For numbers 150080 and 150032 the result should be 10")
#Mubashir
