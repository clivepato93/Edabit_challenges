# https://edabit.com/challenge/ecwE3tQK9Na8GJ9pN
def little_big(n):
    f=[]
    c=0
    for i in range(1,n+1):
        if i%2:
            f.append((i+9)/2)
        else:
            f.append(100*(2**c))
            c+=1


    return f[n-1]


print(little_big(1), 5)
print(little_big(2), 100)
print(little_big(3), 6)
print(little_big(4), 200)
print(little_big(5), 7)
print(little_big(6), 400)
print(little_big(7), 8)
print(little_big(8), 800)
print(little_big(9), 9)
print(little_big(10), 1600)
print(little_big(11), 10)
print(little_big(12), 3200)
print(little_big(13), 11)
print(little_big(14), 6400)
print(little_big(15), 12)
print(little_big(16), 12800)
print(little_big(17), 13)
print(little_big(18), 25600)
print(little_big(19), 14)
print(little_big(20), 51200)
print(little_big(21), 15)
print(little_big(22), 102400)
print(little_big(23), 16)
print(little_big(24), 204800)
print(little_big(25), 17)
print(little_big(26), 409600)
print(little_big(27), 18)
print(little_big(28), 819200)
