# https://edabit.com/challenge/MKpSfBCXargD35J8p
def journey_distance(n):
    km=0
    for i in range(3,n+1,2):
        km+=1
    return km

# print(journey_distance(0), 0)
# print(journey_distance(3), 1)
print(journey_distance(5), 2)
print(journey_distance(9), 4)
# print(journey_distance(15), 7)
# print(journey_distance(99), 49)
# print(journey_distance(11037), 5518)
