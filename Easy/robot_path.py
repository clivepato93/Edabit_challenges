# https://edabit.com/challenge/towwrEJ7zr8xKGSr5
def robot_path(commands):
    e= sum(1 for i in commands if i == "e")
    n=sum(1 for i in commands if i == "n")
    w=sum(1 for i in commands if i == "w")
    s=sum(1 for i in commands if i == "s")
    # n=sum(1 for i in commands if i == "n")
    if s>=3:
        return False

    elif (e-n==0 or e-n==-1) or (n-w<=0):
        return True
    # if (sum(1 for i in commands if i == "w")>sum(1 for i in commands if i == "n")):
    return False


print(robot_path(['s', 'e', 'e', 'n', 'n', 'e', 'n']), True)
print(robot_path(['n', 's', 'n', 'n', 'e', 'n', 'w', 'w', 's', 'w', 'w', 'w', 'n']), True)
print(robot_path(['n', 's', 'n', 'n', 'n', 'e', 'n', 'w', 'n', 'w', 's', 'w', 'w', 'w', 'n']), False)
print(robot_path(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's', 'e', 'w', 'w']), False)
print(robot_path(['n', 'e', 's', 'w', 'n', 'e', 's', 'w', 'w', 's', 'n', 'e']), False)
