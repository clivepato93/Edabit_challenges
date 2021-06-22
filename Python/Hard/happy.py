# https://edabit.com/challenge/knWLLoi87YbCmKJS4

def happy(n):
    while True:
        n=sum(int(i)**2 for i in str(n))
        if n==1:
            return True
        elif n==4:
            return False


print(happy(100), True)
print(happy(101), False)
print(happy(102), False)
print(happy(103), True)
print(happy(104), False)
print(happy(105), False)
print(happy(106), False)
print(happy(107), False)
print(happy(108), False)
print(happy(109), True)
print(happy(110), False)
