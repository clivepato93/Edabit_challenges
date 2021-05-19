# https://edabit.com/challenge/ziaNsc7J4ySFY6rF6
def will_fit(holds, cargo):
    car={"S":50,
         "M":100,
         "L":200}
    total_h=sum(car[i] for i in holds)
    c=sum(i for i in cargo)
    return total_h-c>=0


print(will_fit(["M", "L", "L", "M"], [56, 62, 84, 90]), True)
print(will_fit(["L", "L", "M"], [56, 62, 84, 90]), True)
print(will_fit(["S", "S", "S", "S", "L"], [40, 50, 60, 70 , 80, 90, 200]), False)
print(will_fit(["S", "L"], [73 , 87, 95, 229]), False)
