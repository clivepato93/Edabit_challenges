# https://edabit.com/challenge/qrSc3vKCqyFcz9ptr

# original solution
def sum_round(n):
    n=str(n)[::-1]
    return " ".join([v+("0"*(i)) for i,v in enumerate(n) if v!='0'])

# if i wanted to do in a one liner
def sum_round(n):
    return " ".join([v+("0"*(i)) for i,v in enumerate(str(n)[::-1]) if v!='0'])

print(sum_round(101), "1 100")
print(sum_round(1010), "10 1000")
print(sum_round(1234), "4 30 200 1000")
print(sum_round(54213), "3 10 200 4000 50000")
print(sum_round(548741), "1 40 700 8000 40000 500000")
print(sum_round(1234567), "7 60 500 4000 30000 200000 1000000")
