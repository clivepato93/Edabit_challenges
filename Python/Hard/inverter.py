# https://edabit.com/challenge/ThvNE5FZRX6JbGoTo

def inverter(txt, type):
    txt=txt.split()[::-1] if type=='P' else [w[::-1] for w in txt.split()]
    return ' '.join(txt).capitalize()

print(inverter("This is Valhalla", "P"),"Valhalla is this")
print(inverter("One fine day to start", "W"),"Eno enif yad ot trats")
