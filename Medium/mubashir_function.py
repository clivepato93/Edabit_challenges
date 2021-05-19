
# https://edabit.com/challenge/5NJnNKCvC3ApnHxCC

def mubashir_function(a, b):
    a=int("".join([chr(ord(i)) for i in str(a)][::-1]))
    b=int("".join([chr(ord(i)) for i in str(b)][::-1]))
    if len(str(a))==1 and len(str(b))==1:
        return a*b
    return min(a,b)

def mubashir_function(a, b):
    return sum(int(i) for i in str(a))*sum(int(i) for i in str(b))

#0 * 1 = 0
print(mubashir_function(0,1), 0)

#Obviously, 1 * 2 = 2
print(mubashir_function(1,2), 2)

#That was easy, 5 * 6 = 30
print(mubashir_function(5,6), 30)

#Wait.. What? 10 * 10 = 1 ?
print(mubashir_function(10,10), 1)

#What's happening ? 200 * 200 = 4, 0 was omitted ?
print(mubashir_function(200,200), 4)

#One more...
print(mubashir_function(12,34), 21)

#You can guess from this..
print(mubashir_function(123,45),54)

#Mubashir
