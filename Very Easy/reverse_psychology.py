# https://edabit.com/challenge/bMdFkscm8ESR5GLtN
def reverse_psychology(*s):
    lst = list(s)
    if lst:
        return "Do not {}.".format(lst[0])
    return "Do not do anything."



print(reverse_psychology("wash the dishes"), "Do not wash the dishes.")
print(reverse_psychology("eat your lunch"), "Do not eat your lunch.")
print(reverse_psychology("go to school"), "Do not go to school.")
print(reverse_psychology(), "Do not do anything.")
