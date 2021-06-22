
# https://edabit.com/challenge/aEMgdg3zgznbnDMpz

def rotated_words(txt):
    l=["H", "I", "N", "O", "S", "X", "Z","W"]
    t=[]
    for i in txt.split():
        if i not in t:
            t.append(i)
    return sum(1 for w in t if all(i in l for i in w))




print(rotated_words("MUBASHIR"), 0)
print(rotated_words("HSSN"), 1)
print(rotated_words("ON"), 1, 'Wrong result for "ON". It should be 1')
print(rotated_words("OS IS UPDATED"), 2, 'Wrong result for "OS IS UPDATED". It should be 2')
print(rotated_words("WHO IS WHO"), 2, 'Wrong result for "WHO IS WHO". It should be 2')
print(rotated_words("JS"), 0, 'Wrong result for "JS". It should be 0')
print(rotated_words("I III I III"), 2, 'Wrong result for "I III I III". It should be 2')
print(rotated_words("SOS IN THE SEA"), 2, 'Wrong result for "SOS IN THE SEA". It should be 2')
print(rotated_words("WHO IS rotated_words AND WHO IS NO"), 3, 'Wrong result for "WHO IS rotated_words AND WHO IS NO". It should be 3')
print(rotated_words("SIN AND COS"), 1, 'Wrong result for "SIN AND COS". It should be 1')
print(rotated_words("I HAVE A GOOD JOB"), 1, 'Wrong result for "I HAVE A GOOD JOB". It should be 1')
print(rotated_words("HAVE A GOOD DAY"), 0, 'Wrong result for "HAVE A GOOD DAY". It should be 0')
print(rotated_words(""), 0, 'Wrong result for "". It should be 0.')
#Mubashir
