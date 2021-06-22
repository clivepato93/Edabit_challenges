# https://edabit.com/challenge/AvP94XqJvPjoMk5PT

def unique_styles(a):
    e=[]
    a=[i.split(",")for i in a]
    for row in a:
        for c in row:
            if c not in e:
                e.append(c)
    return len(e)


print(unique_styles([
	"Dub,Dancehall",
	"Industrial,Heavy Metal",
	"Techno,Dubstep",
	"Synth-pop,Euro-Disco",
	"Industrial,Techno,Minimal"
]), 9)
