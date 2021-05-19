# https://edabit.com/challenge/MpaWRHpnu7uK7nYgB
# my solution
def doubleton(n):
    return [i for i in range(n+1,n*3) if len(set(str(i)))==2][0]

# better solution
# think of a better solution


# print(doubleton(130), 131)
# print(doubleton(1434), 1441)
# print(doubleton(20), 21)
print(doubleton(5), 10)
# print(doubleton(131), 133)
print(doubleton(1000000), 1000001)
# #Mubashir
