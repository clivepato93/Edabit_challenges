# https://edabit.com/challenge/JsLu5qWsJtuJuBZT4
def flip(txt, spec):
    if spec=="word":
        c = [word[::-1] for word in txt.split()]
        return " ".join(c)
    return " ".join(txt.split()[::-1])

txt1 = "There's never enough time to do all the nothing you want"
txt2 = "I have all these great genes but they're recessive"
txt3 = "I like maxims that don't encourage behavior modification"


print(flip('Hello', 'word'), 'olleH')
print(flip('Hello', 'sentence'), 'Hello')
print(flip(txt1, 'word'), "s'erehT reven hguone emit ot od lla eht gnihton uoy tnaw")
print(flip(txt1, 'sentence'), "want you nothing the all do to time enough never There's")
print(flip(txt2, 'word'), "I evah lla eseht taerg seneg tub er'yeht evissecer")
print(flip(txt2, 'sentence'), "recessive they're but genes great these all have I")
print(flip(txt3, 'word'), "I ekil smixam taht t'nod egaruocne roivaheb noitacifidom")
print(flip(txt3, 'sentence'), "modification behavior encourage don't that maxims like I")
