# https://edabit.com/challenge/fYMjhe7BnijXwfNpF
def stmid(string):
    s = string.split()
    c = [word[len(word)//2] if len(word)%2!=0 else word[0] for word in s]
    return ''.join(c)

print(stmid("Alexa have to paid"), "ehtp")
print(stmid("Th3 0n3 4nd 0n1y") , "hnn0")
print(stmid("who is the winner"), "hihw")
