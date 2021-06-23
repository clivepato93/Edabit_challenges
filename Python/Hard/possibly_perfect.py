# https://edabit.com/challenge/26P2iwW5WfwPGJyWE
def possibly_perfect(k, a):
    pairs=list(zip(a,k))
    c=0
    w=0
    for a,b in pairs:
        if b=="_":
            continue
        elif a==b:
            c+=1
        else:
            w+=1
    return False if c and w else True



print(possibly_perfect(['A', '_', 'C', '_', 'B'], ['A', 'D', 'C', 'E', 'B']), True)
print(possibly_perfect(['B', '_', 'B'], ['B', 'D', 'C']), False)
print(possibly_perfect(['T', '_', 'F', 'F', 'F'], ['F', 'F', 'T', 'T', 'T']), True)
print(possibly_perfect(['B', 'A', '_', '_'], ['B', 'A', 'C', 'C']), True)
print(possibly_perfect(['A', 'B', 'A', '_'], ['B', 'A', 'C', 'C']), True)
print(possibly_perfect(['A', 'B', 'C', '_'], ['B', 'A', 'C', 'C']), False)
