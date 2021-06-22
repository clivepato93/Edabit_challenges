# https://edabit.com/challenge/ehyZvt6AJF4rKFfXT
def uncensor(txt, vowels):
    f=""
    c=0
    for i in range(len(txt)):
        if txt[i]=="*":
            f+=vowels[c]
            c+=1
        else:
            f+=txt[i]
    return f



print(uncensor('Wh*r* d*d my v*w*ls g*?', 'eeioeo'), 'Where did my vowels go?')
print(uncensor('abcd', ''), 'abcd', 'Works with no vowels.')
print(uncensor('*PP*RC*S*', 'UEAE'), 'UPPERCASE', 'Works with uppercase')
print(uncensor('Ch**s*, Gr*mm*t -- ch**s*', 'eeeoieee'), 'Cheese, Grommit -- cheese', 'Works with * at the end')
print(uncensor('*l*ph*nt', 'Eea'), 'Elephant', 'Works with * at the start')
