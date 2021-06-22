# https://edabit.com/challenge/FLgJEC8SK2AJYLC6y

def possible_path(lst):
    n=[2,4]
    lst1=list(zip(lst,lst[1:]))
    for a,b in lst1:
         if ("H" ==a and b not in n) or (a not in n and b== "H"):
             return False
         elif type(a)==int and type(b)==int and abs(a-b)!=1:
             return False
    return True
    # return all((a=="H" or b not in [2,4]) or (a not in [2,4] or b =="H")  for a,b in list(zip(lst,lst[1:])))
print(possible_path([1, 2, "H", 4, 3]), True)
print(possible_path(["H", 1, 2]), False)
print(possible_path([4, 3, 4, "H", 4, "H"]), True)
print(possible_path(["H"]), True)
print(possible_path([1]), True)
print(possible_path([1, 2, 1]), True)
print(possible_path(["H", 2, 1, "H", 2]), False)
print(possible_path([3, "H", 2, 1]), False)
print(possible_path(["H", 2, 3, "H"]), False)
print(possible_path([1, 3, 4]), False)
