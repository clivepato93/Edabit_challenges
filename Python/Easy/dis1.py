# https://edabit.com/challenge/cXnkmRdxqJrwdsP4n
def dis(price, discount):
    return round(price-(price*(float(discount)/100)),2)

print(dis(100, 75), 25)
print(dis(211, 50), 105.5)
print(dis(593, 61), 231.27)
print(dis(1693, 80), 338.6)
print(dis(700, 10), 630)
