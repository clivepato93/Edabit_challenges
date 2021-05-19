# https://edabit.com/challenge/hGzNSr5CSEpTsmy5W

def not_good_math(n, k):
    d=0
    while d!=k:
        if str(n)[-1]!="0":
            n-=1
        elif str(n)[-1]=="0":
            n//=10
        d+=1
    return n



print(not_good_math(78, 9), 7)
print(not_good_math(540, 5), 50)
print(not_good_math(1000000000, 9), 1)
print(not_good_math(420, 4), 4)
print(not_good_math(42023110, 10), 4201)
print(not_good_math(88888888, 50), 883)
