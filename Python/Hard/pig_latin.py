# https://edabit.com/challenge/7AQgJookgCdbom2Zd


def pig_latin(txt):
    vowels='aAeEIioOuU'
    add=['ay','way']
    txt=txt.split()
    if txt[-1][-1]=='.':
        txt[-1]=txt[-1][:-1]
    for i,v in enumerate(txt):
        if len(txt)==1:
            x=[l for l in v if l.isalpha()]
            return x[1].upper()+''.join(x[2:])+x[0].lower()+add[0]+txt[-1][-1] if x[0] not in vowels else ''.join(x)+add[1]+txt[-1][-1]
    
        elif i==0 and len(txt[i])!=1:
            txt[i]=txt[i][1].upper()+txt[i][2:]+txt[i][0].lower()+add[txt[i][0] in vowels]
        elif len(txt[i])==1:
            txt[i]=txt[i]+add[1]
        else:
            if txt[i][0] in vowels:
                txt[i]=txt[i][:]+add[1]
            else:
                txt[i]=txt[i][1]+txt[i][2:]+txt[i][0].lower()+add[0]

    return ' '.join(txt)+'.'


print(pig_latin("Cats are great pets."), "Atscay areway reatgay etspay.")
# print(pig_latin("Tom got a small piece of pie."), "Omtay otgay away mallsay iecepay ofway iepay.")
# print(pig_latin("He told us a very exciting tale."), "Ehay oldtay usway away eryvay excitingway aletay.")
# print(pig_latin("A diamond is not enough."), "Away iamondday isway otnay enoughway.")
# print(pig_latin("Hurry!"), "Urryhay!")