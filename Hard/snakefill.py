# https://edabit.com/challenge/Y5Ji2HDnQTX7MxeHt
def snakefill(n):
    c=1
    board=n**2
    a=-1
    while c<=board:
        c*=2
        a+=1
    return a



print(snakefill(8), 6)
print(snakefill(18), 8)
print(snakefill(555), 18)
print(snakefill(2), 2)
print(snakefill(1), 0)
print(snakefill(900), 19)
