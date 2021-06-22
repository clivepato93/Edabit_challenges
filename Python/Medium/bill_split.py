# https://edabit.com/challenge/KspbYHCtFZCcav7zx
def bill_split(spicy, cost):
    me=[(a,b/2.0) if a=="N" else (a,b)  for a,b in list(zip(spicy,cost))]
    friend=[(a,b-b) if a=="S" else (a,b/2.0)  for a,b in list(zip(spicy,cost))]
    return [int(sum(b for a,b in me)),int(sum(b for a,b in friend))]

print(bill_split(['N', 'S', 'N'], [10, 10, 20]), [25, 15])
print(bill_split(['N', 'N'], [10, 10]), [10, 10])
print(bill_split(['S', 'N'], [41, 10]), [46, 5])
print(bill_split(['S', 'S', 'S', 'N', 'N'], [8, 9, 8, 7, 7]), [32, 7])
print(bill_split(['N', 'N', 'N', 'S'], [40, 20, 20, 10]), [50, 40])
