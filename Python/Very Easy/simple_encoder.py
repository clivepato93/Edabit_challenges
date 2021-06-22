# https://edabit.com/challenge/5pBHzWb8Psot9EQNk

def simple_encoder(s):
    new_str=""
    s=s.lower()
    for letter in s:
        if s.count(letter)==1:
            new_str+='['
        elif s.count(letter)>=2:
            new_str+=']'
    return new_str

print(simple_encoder("Mubashir"), "[[[[[[[[")
print(simple_encoder("Matt"), "[[]]")
print(simple_encoder("Mu ba sh ir Ha ss an"), "[[][]]]]][[]]]]]]]][")
