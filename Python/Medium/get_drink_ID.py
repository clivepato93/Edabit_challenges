# https://edabit.com/challenge/Mv5qSgZKTLrLt9zzW
def get_drink_ID(flavor, ml):
    flavor="".join([fla[:3] for fla in flavor.split()])
    return "{}{}".format(flavor.upper(),ml[:-2])

print(get_drink_ID("apple", "500ml"), "APP500")
print(get_drink_ID("pineapple", "45ml"), "PIN45")
print(get_drink_ID("orange", "750ml"), "ORA750")
print(get_drink_ID("passion fruit", "1ml"), "PASFRU1")
print(get_drink_ID("mango", "1000ml"), "MAN1000")
print(get_drink_ID("very berry", "253ml"), "VERBER253")
print(get_drink_ID("raspberry and lime", "350ml"), "RASANDLIM350")
