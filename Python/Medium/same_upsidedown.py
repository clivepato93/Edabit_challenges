# https://edabit.com/challenge/LDQvCxTPv4iiY8B2A
def same_upsidedown(ntxt):
    d={"6":"9",
      "9":"6",
       "0":"0"}
    compare=""
    for i in ntxt:
        compare+=d[i]
    return compare[::-1]==ntxt


print(same_upsidedown("9"), False)
print(same_upsidedown("0"), True)
print(same_upsidedown("6090609"), True)
print(same_upsidedown("9669"), False)
print(same_upsidedown("69069069"), True)
print(same_upsidedown("60906096090609"), True)
print(same_upsidedown("966909669"), False)
print(same_upsidedown("6000000009"), True)
print(same_upsidedown("6666660999999"), True)
print(same_upsidedown("96666660999999"), False)
