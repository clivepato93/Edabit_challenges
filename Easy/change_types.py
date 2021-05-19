# https://edabit.com/challenge/MiAnCNYivnAc9AFXn
def change_types(lst):
    f=[]
    for i in lst:
        if isinstance(i, bool):
            f.append(not(i))
        elif isinstance(i, int):
            if i%2==0:
                f.append(i+1)
            else:
                f.append(i)
        elif isinstance(i, str):
            f.append(i.capitalize()+"!")
    return f

print(change_types(["a", 12, True]),["A!", 13, False])
print(change_types([13, "13", "12", "twelve"]), [13, "13!", "12!", "Twelve!"])
print(change_types([False, "False", "true"]), [True, "False!", "True!"])
