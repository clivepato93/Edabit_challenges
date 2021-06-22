def verbify(txt):
    first=txt.split()[0]
    last= txt.split()[1]

    if first.endswith("ed"):
        first=first
    elif first.endswith("e"):
        first=first+"d"
    elif first[-1] != "e":
        first=first+"ed"
    return first+" "+last



print(verbify("cheese burger"), "cheesed burger")
print(verbify("bean toast"), "beaned toast")
print(verbify("orange juice"), "oranged juice")
print(verbify("verb noun"), "verbed noun")
print(verbify("apple sauce"), "appled sauce")
print(verbify("girl friend"), "girled friend")
print(verbify("shredded cheese"), "shredded cheese")
print(verbify("cheese cake"), "cheesed cake")
print(verbify("lemon cheesecake"), "lemoned cheesecake")
print(verbify("air plane"), "aired plane")
print(verbify("pumpkin pie"), "pumpkined pie")
print(verbify("salt water"), "salted water")
