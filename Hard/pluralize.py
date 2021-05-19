# https://edabit.com/challenge/LR98GCwLGYPSv8Afb

def pluralize(lst):
    return set(i+"s" if lst.count(i)>1 else i for i in lst)


print(pluralize(["cow", "pig", "cow", "cow"]), {"cows", "pig"})
print(pluralize(["table", "table", "table"]), {"tables"})
print(pluralize(["chair", "pencil", "arm"]), {"chair", "pencil", "arm"})
print(pluralize(["list"]), {"list"})
print(pluralize(["set", "set", "tuple", "tuple", "string", "string", "string", "string", "integer"]), {"sets", "tuples", "strings", "integer"})
