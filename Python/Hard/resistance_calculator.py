# https://edabit.com/challenge/4QLMtW9tzMcvG7Cxa
def resistance_calculator(r):
    # b=round(1/sum(1/float(i) if i>0 else 0 for i in r),2) if (1.0/sum(r))>0 else 0
    b=0
    c=round(sum(r),1)
    for i in r:
        if i>0:
            b+=1.0/i
        else:
            b=0
    if b>0:
        b=round(1.0/b,2)
    # return b
    return [int(b) if int(b)==b else b,int(c) if int(c)==c else c]
    # return c

print(resistance_calculator([10, 20, 30, 40, 50]), [4.38, 150])
print(resistance_calculator([25, 14, 65, 18]), [5.48, 122])
print(resistance_calculator([10, 10]), [5, 20])
print(resistance_calculator([0, 0, 0, 0]), [0,0])
print(resistance_calculator([1.1, 2.1, 3.2, 4.3, 5.4, 6.5]), [0.44, 22.6])
print(resistance_calculator([332.963, 87.036]), [69, 420])
print(resistance_calculator([12345, 0]), [0, 12345])

print(round(1.0/12345))
