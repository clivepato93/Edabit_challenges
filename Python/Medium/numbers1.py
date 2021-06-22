# https://edabit.com/challenge/do3MBKp3AqnnnCBMQ
from random import randint
def numbers():
    f=[]
    o=0
    while len(f)!=5:
        o=randint(1,5)
        if o not in f:
            f.append(o)
    return int(''.join(str(i) for i in f))

print(numbers())
