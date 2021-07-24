# https://edabit.com/challenge/Q8XSxTfzP3HLS57h5

def average_ascii(txt):
    txt=[[i,sum(ord(l) for l in i)] for i in txt.split()]
    average=sum(b for a,b in txt)/len(txt)
    for x in txt:
        if x[1]>average:
            x[0]=x[0].upper()
    return ' '.join(x[0] for x in txt)

def average_ascii(txt):
    average=sum(ord(l) for a in txt.split() for l in a)/len(txt.split())
    return ' '.join(word.upper() if sum(ord(l) for l in word)>average else word for word in txt.split())

print(average_ascii("Edabit helps you learn in bitesize chunks"), "EDABIT HELPS you learn in BITESIZE CHUNKS")
print(average_ascii("To be or not to be"), "To be or NOT to be")
print(average_ascii("What you egg"), "WHAT you egg")
print(average_ascii("Made by Harith Shah"), "Made by HARITH Shah")
print(average_ascii("Boom"), "Boom")
print(average_ascii("The most addictive way to learn"), "The most ADDICTIVE way to LEARN")