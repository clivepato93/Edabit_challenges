# https://edabit.com/challenge/wfGpK8TAeiy8uRsvN
def filter_string(txt):
    return [sum(1 for i in txt if i.isupper()),sum(1 for i in txt if i.islower()),sum(1 for i in txt if i.isdigit()),sum(1 for i in txt if not i.isdigit() and not i.isalpha())]

print(filter_string("*$(#Mu12bas43hiR%@*!"), [2,6,4,8])
print(filter_string("^^Edabit^^%$#12379"), [1,5,5,7])
print(filter_string("123PakisTan#$%"), [2,6,3,3])
print(filter_string("**Airforce1**"), [1,7,1,4])
print(filter_string("bgA5<1d-tOwUZTS8yQ"), [7,6,3,2])
print(filter_string("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"), [9,9,6,9])
print(filter_string("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"), [15,8,6,9])
print(filter_string("$Cnl)Sr<7bBW-&qLHI!mY41ODe"), [10,7,3,6])
print(filter_string("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"), [7,13,4,10])
#Mubashir
