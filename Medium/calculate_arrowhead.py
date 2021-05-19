# https://edabit.com/challenge/mhcjnns2WWiHWexP7

def calculate_arrowhead(lst):
    r=[">",0]
    l=["<",0]
    for i in lst:
        r[1]+=i.count(">")
        l[1]+=i.count("<")
    if r[1]>l[1]:
        return ">"*(r[1]-l[1])
    elif l[1]>r[1]:
        return "<"*(l[1]-r[1])
    else:
        return ""


print(calculate_arrowhead([">>>>", "<", "<", "<"]), ">")
print(calculate_arrowhead([">", "<", ">>", "<", "<<<"]), "<<")
print(calculate_arrowhead([">>>", "<<<"]), "")
print(calculate_arrowhead([">>", "<<", "<<<"]), "<<<")
print(calculate_arrowhead([">", ">>>>>", ">>>>", ">>>>>>>", ">>>>>>>>", ">>>>", ">>>>>>>>"]), ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
print(calculate_arrowhead(["<", ">>>>>>", "<<<<<<<<", "<<<<<<<<<<", ">>>>>>>", ">>>"]), "<<<")
print(calculate_arrowhead(["<<<<", ">>>>>"]), ">")
print(calculate_arrowhead(["<<<<<<<<<", "<<<<", ">>>", ">>>>>>>>", ">>>>>>>", "<<<<<"]), "")
print(calculate_arrowhead([">>>>>>>>>>", "<<", ">>>>>>>>>>"]), ">>>>>>>>>>>>>>>>>>")
print(calculate_arrowhead([">", "<<<", ">>>>>>>>>>", ">>>>>"]), ">>>>>>>>>>>>>")
