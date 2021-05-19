# https://edabit.com/challenge/rBMsnM8HuGNSwkBCR

def add_bill(money):
    money=[i for i in money.split(",") if i[0]=="d"]
    for i in range(0,len(money)):
        money[i]=money[i].replace("d",'').replace("k","000")
    return sum(int(i) for i in money)

print(add_bill("d200,p40,p60,d1k"), 1200)
print(add_bill("d10,d40,p60,d200"), 250)
print(add_bill("d10k,p500,p200"), 10000)
print(add_bill("p400,d200,p40,p60"), 200)
print(add_bill("d20k,d100,p40"), 20100)
print(add_bill("p20k,p100,d100"), 100)
print(add_bill("d100k"), 100000)
