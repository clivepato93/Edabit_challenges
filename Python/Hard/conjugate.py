# https://edabit.com/challenge/2nx4JCytABfczdYGt

def conjugate(verb, pronoun):
    p={1:"Io",2:"Tu",3:"Egli",4:"Noi",5:"Voi",6:"Essi"}
    s={1:"o",2:"i",3:"a",4:"iamo",5:"ate",6:"ano"}
    v='aieou'
    f=verb[-3:]
    # return f
    if (verb[:-3][-1]=="c" or verb[:-3][-1]=="g")and (pronoun==2 or pronoun ==4):
        return '{} {}{}'.format(p.get(pronoun),verb[:-3]+"h",s.get(pronoun))
    if verb[:-3][-1]=="i" and (pronoun==2 or pronoun ==4):
        return '{} {}{}'.format(p.get(pronoun),verb[:-4],s.get(pronoun))
    return '{} {}{}'.format(p.get(pronoun),verb[:-3],s.get(pronoun))
print(conjugate("edabittare", 4), "Noi edabittiamo", "We edabit :-)")
print(conjugate("programmare", 5), "Voi programmate", "You code")
print(conjugate("iniziare", 2), "Tu inizi", "You start")
print(conjugate("mancare", 4), "Noi manchiamo", "We miss")
print(conjugate("parlare", 1), "Io parlo", "I speak")
print(conjugate("sognare", 3), "Egli sogna", "He dreams")
print(conjugate("negare", 2), "Tu neghi", "You deny")
print(conjugate("insegnare", 5), "Voi insegnate", "You teach")
print(conjugate("tagliare", 4), "Noi tagliamo", "We cut")
print(conjugate("nuotare", 1), "Io nuoto", "I swim")
print(conjugate("cambiare", 3), "Egli cambia", "He changes")
