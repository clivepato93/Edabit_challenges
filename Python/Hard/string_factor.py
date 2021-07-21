# https://edabit.com/challenge/KFKziCxeTiCLfzMao

def string_factor(lst):
    l=sorted(set(lst))
    return ' x '.join(str(i)+'^'+str(lst.count(i)) if lst.count(i)>1 else str(i)  for i in l)


print(string_factor([2, 2, 2, 3, 3]), "2^3 x 3^2")
print(string_factor([2, 7]), "2 x 7")
print(string_factor([2, 3, 3]), "2 x 3^2")
print(string_factor([2, 2, 2, 2, 2]), "2^5")
print(string_factor([2, 3, 7]), "2 x 3 x 7")
print(string_factor([2, 2, 7, 11]), "2^2 x 7 x 11")
print(string_factor([11, 11, 11]), "11^3")