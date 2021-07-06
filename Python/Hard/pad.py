# https://edabit.com/challenge/8WvpPQto44PqNLSqJ

def pad(message):
    n= 140-(len(message)%140)
    if len(message)>=140:
        return message
    elif len(message)%2==0:
        n-=2
        return message+" "+int((n/2))*'lo'+'l'
    return message+int(n/2)*'lo'+'l'


print(pad("Even"), "Even lololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololol")
print(pad("Odd"), "Oddlolololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololol")
print(pad("I love the new challenge"), "I love the new challenge lololololololololololololololololololololololololololololololololololololololololololololololololololololololololol")
print(pad("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dolor purus, finibus eget magna vel, suscipit semper nibh. Quisque posuere."), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dolor purus, finibus eget magna vel, suscipit semper nibh. Quisque posuere.")

print('Oddlolololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololol'== 'Oddlolololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololol')
print(len('Even lololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololol'),len('Even lololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololol'))
