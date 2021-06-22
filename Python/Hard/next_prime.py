def next_prime(num):
    f=True
    while f:
        if len([i for i in range(1,num+1) if num%i==0])==2:
                return num
        num+=1



print(next_prime(12), 13)
