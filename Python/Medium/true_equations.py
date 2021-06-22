# https://edabit.com/challenge/RcauxLL2SqHYpzZrz
def true_equations(lst):
    f=[]
    for i in lst:
        c=i.split("=")
        if eval(c[0])==int(c[-1]):
            f.append(i)
    return f


print(true_equations(["2*2=4"]), ["2*2=4"])
# print(true_equations(["1+1=3", "3-1=1"]), [])
# print(true_equations(["1+1=2", "2+2=3", "5*5=10", "3/3=1"]), ["1+1=2", "3/3=1"])
# print(true_equations(["4/2=2", "8-4=2", "5*5=25", "3/3=14"]), ["4/2=2", "5*5=25"])
# print(true_equations(["1-1=0", "2/2=1", "13+9=22", "1*9=9"]), ["1-1=0", "2/2=1", "13+9=22", "1*9=9"])
# print(true_equations(["1/41=3", "2+19=14", "13*9=22", "1-9=9"]), [])
# print(true_equations(["82/41=2", "21-17=3", "3+99=2", "9*9=81","7*6=42","101+10=111","2*3=5","143/11=13"]), ["82/41=2","9*9=81","7*6=42","101+10=111","143/11=13"])
