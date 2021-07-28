# https://edabit.com/challenge/hbrEwrcSAQTbP9fKS

def get_catalan_number(n):
    if n==0:return 1
    top=[i for i in range(2*n,((2*n)//2)+1,-1)]
    bot=[i for i in range(1,n+1)]
    start=1
    for i in top:
        start*=i
    top=start
    start=1
    for x in bot:
        start*=x
    bot=start
    return top//bot


print(get_catalan_number(0), 1)
print(get_catalan_number(1), 1)
print(get_catalan_number(3), 5)
print(get_catalan_number(7), 429)