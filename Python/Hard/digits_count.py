# https://edabit.com/challenge/dLYhGnWQ5Q8DRmnbR

def digits_count(n):
    n=abs(n)
    x=0
    while n>0:
        n//=10
        x+=1
    return max(x,1)



print(digits_count(544))