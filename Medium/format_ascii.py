# https://edabit.com/challenge/G7m26EdX3AABCSQBv

def format_ascii(txt, width):
    c=[]
    a=width
    for i in range(0,len(txt),a):
        c.append(txt[i:width])
        width+=a
    return '\n'.join(c)


print(format_ascii('#@#@#@#@', 2), '#@\n#@\n#@\n#@')
print(format_ascii('0123456789', 2), '01\n23\n45\n67\n89')
print(format_ascii('................................', 8), '........\n........\n........\n........')
print(format_ascii('^^^^^^^^', 1), '^\n^\n^\n^\n^\n^\n^\n^')
