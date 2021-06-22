# https://edabit.com/challenge/mwicBKcq3gTGhsGsW

def make_word_riddle(s):
    s=[v.upper() for v in s.lower().split("in")]
    return s[1][0]+s[0]+s[1][1:]


print(make_word_riddle('Finland'), 'LFAND')
print(make_word_riddle('dinner'), 'NDER')
print(make_word_riddle('tkinter'), 'TTKER')
print(make_word_riddle('STRINGS'), 'GSTRS')
print(make_word_riddle('continue'), 'UCONTE')
print(make_word_riddle('cinematographer'), 'ECMATOGRAPHER')
print(make_word_riddle('distinguishable'), 'GDISTUISHABLE')
print(make_word_riddle('Determination'), 'ADETERMTION')
