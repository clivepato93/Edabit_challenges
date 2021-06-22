# https://edabit.com/challenge/e8TFAMbTTaEr7JSgd

def left_digit(num):
    l=[]
    for value in num:
        if value.isdigit():
            l.append(value)
    return l

print(left_digit("TrAdE2W1n95!"), 2)
print(left_digit("V3r1ta$"), 3)
print(left_digit("U//DertHe1nflu3nC3"), 1)
