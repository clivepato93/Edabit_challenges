# https://edabit.com/challenge/7ZFrHepr336TBMsF5
def percentage_changed(old, new):
    old,new=int(old[1:]),int(new[1:])
    final_price=int(round(abs((old-new)/float(old))*100))
    quote=["decrease","increase"][old<new]
    return "{}% {}".format(final_price,quote)

print(percentage_changed("$800", "$600"), "25% decrease")
print(percentage_changed("$1000", "$840"), "16% decrease")
print(percentage_changed("$700", "$650"), "7% decrease")
print(percentage_changed("$100", "$950"), "850% increase")
print(percentage_changed("$450", "$460"), "2% increase")
print(percentage_changed("$1000", "$1500"), "50% increase")
