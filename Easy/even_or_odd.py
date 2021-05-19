# https://edabit.com/challenge/suhHcPgaKdb9YCrve
def even_or_odd(s):
    o,e=[],[]
    s=[int(i) for i in s]
    for i in s:
        if i%2:
            o.append(i)
        else:
            e.append(i)
    if sum(o)>sum(e):
        return 'Odd is greater than Even'
    elif sum(o)<sum(e):
        return 'Even is greater than Odd'
    else:
        return 'Even and Odd are the same'


print(even_or_odd('12345'), 'Odd is greater than Even')
