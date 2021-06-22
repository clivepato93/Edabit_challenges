# https://edabit.com/challenge/zZyeau2MYcEc8Fdtk
def round_number(num, n):
    a=(num//n)*n
    b=((num//n)+1)*n
    if b-num>num-a:
        return a
    elif b-num<num-a:
        return b
    return b


print(round_number(34, 25), 25)
print(round_number(54, 8), 56)
print(round_number(65, 10), 70)
print(round_number(6247, 163), 6194)
print(round_number(532, 12), 528)
print(round_number(642234, 1523), 642706)
print(round_number(5123, 10), 5120)
print(round_number(96623443, 7650), 96627150)
print(round_number(125123, 520), 125320)
print(round_number(12121212, 144), 12121200)
