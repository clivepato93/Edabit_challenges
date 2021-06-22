# https://edabit.com/challenge/nLNCPwzcbvrHmt4MF
def fibonacci_sequence():
    seq=[0,1]
    a=0
    b=1
    for i in range(100):
        a,b=b,a+b
        seq.append((b))
    return seq[:14]

print(fibonacci_sequence())
