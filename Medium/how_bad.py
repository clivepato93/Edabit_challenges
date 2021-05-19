# https://edabit.com/challenge/WixXhsdqcNHe3vTn3

def how_bad(n):
    g=0
    # c=bin(n)[2:]

    l=['Evil','Odious'][bin(n)[2:].count("1")%2]
    # if o>1:
    for i in range(1,sum(int(i) for i in bin(n)[2:])+1):
        if sum(int(i) for i in bin(n)[2:])%i==0:
            g+=1
    if g==2:
        return [l,'Pernicious']
    return [l]

print(how_bad(7), ['Odious','Pernicious'])
print(how_bad(97), ['Odious','Pernicious'])
print(how_bad(66), ['Evil','Pernicious'])
print(how_bad(77), ['Evil'])
print(how_bad(128), ['Odious'])
print(how_bad(666), ['Odious','Pernicious'], "666 is not evil after all")
print(how_bad(987654321), ['Odious','Pernicious'])
print(how_bad(98765), ['Evil'])
