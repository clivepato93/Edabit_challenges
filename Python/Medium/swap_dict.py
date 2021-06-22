# https://edabit.com/challenge/JgD9KHBYrDnKrGJ7a


from collections import Counter

pehle =  {'Mubashir': 'Name',
'31': 'Age',
'Male': 'Sex',
'Pilot': 'Job',
'Matt': 'Name',
'40': 'Age',
'Programmer': 'Job'}

baad_mein =  {'Name': ['Mubashir', 'Matt'],
'Age': ['31', '40'],
'Sex': ['Male'],
'Job': ['Pilot', 'Programmer']}

def swap_dict(dic):
    f={}
    for k,v in dic.items():
        f.setdefault(v,[]).append(k)
    return f

baad_mein = {k: Counter(baad_mein[k]) for k in baad_mein}
sahi_hai = swap_dict(pehle)
sahi_hai = {k: Counter(sahi_hai[k]) for k in sahi_hai}

print(sahi_hai, baad_mein)
