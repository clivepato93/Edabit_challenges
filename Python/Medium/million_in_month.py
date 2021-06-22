# https://edabit.com/challenge/n4JA3je7FEFfZKaWp
def million_in_month(f, m):
    n=1
    money=f
    while money<1000000:
        n+=1
        f*=m
        money+=f
    return n


# print(million_in_month(10,2),17)
# print(million_in_month(5,2),18)
# print(million_in_month(2,5),10)
# print(million_in_month(20,4),9)
print(million_in_month(50,100),4)
print(million_in_month(1,1.01),926)
# print(million_in_month(15,2),17)
# print(million_in_month(20,2),16)
