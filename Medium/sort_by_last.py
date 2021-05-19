
# https://edabit.com/challenge/ic9aKYukaRH2MjDyk
def sort_by_last(txt):
    c=txt.split()
    return " ".join(sorted(c,key=lambda i:i[-1]))



print(sort_by_last("herb camera dynamic"), "camera herb dynamic")
print(sort_by_last("stab traction artist approach"), "stab approach traction artist")
