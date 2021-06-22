# https://edabit.com/challenge/NWR5BK4BYqDkumNiBs
def digital_division(n):
    x=1
    for i in str(n):
        x*=int(i)
    a=[n%sum(int(i) for i in str(n))==0,all(n%int(i)==0 for i in str(n) if int(i)>0),n%x==0 if x>0 else False].count(True)
    return "Perfect" if a==3 else a if a>0 else "Indivisible"
# print(digital_division(21), 1, "Example #1")
# print(digital_division(128), 2, "Example #2")
print(digital_division(100), 2, "Example #3")
# print(digital_division(12), "Perfect", "Example #4")
# print(digital_division(31), "Indivisible", "Example #5")
# print(digital_division(111), "Perfect")
