# https://edabit.com/challenge/F3M4PhqC4JdX28Qmx

def back_to_home(directions):
    if not directions.count("N")>=2:
        return False
    elif not directions.count("S")>=2:
        return False
    elif not directions.count("E")>=2:
        return False
    elif not directions.count("W")>=2:
        return False
    return True

def back_to_home(directions):
    n = directions.count('N')
    e = directions.count('E')
    s = directions.count('S')
    w = directions.count('W')

    if n == s and e == w:
        return True
    return False

print(back_to_home("NNSSEEEWWWEW"), True)
