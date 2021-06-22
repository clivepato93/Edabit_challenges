# https://edabit.com/challenge/8qD23E6XRMaWhyJ5z
def happiness_number(s):
    unhappy =0
    happy=0
    happy+=s.count(":)")
    happy+=s.count("(:")
    unhappy-=s.count(":(")
    unhappy-=s.count("):")
    return unhappy+happy


print(happiness_number(':):('), -1)
print(happiness_number('(:)'), 2)
print(happiness_number('::::'), 0)
print(happiness_number(':)::(()::'), -2)
print(happiness_number('))):'), -1)
print(happiness_number(':):)('), 1)
print(happiness_number(':(:(:()):'), -2)
print(happiness_number('()((:())):'), -1)
print(happiness_number(':(:)'), 1)
print(happiness_number('(:):(:)(('), 2)
print(happiness_number(':(:(:'), 0)
print(happiness_number(')())(()'), 0)
print(happiness_number(':()):'), -2)
print(happiness_number('():(('), -2)
print(happiness_number('::::(():('), -3)
print(happiness_number(')(():((::'), -1)
print(happiness_number('(::):('), 0)
