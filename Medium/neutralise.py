# https://edabit.com/challenge/3wLZvWf4sFerNQmo7
def neutralise(s1, s2):
    c=zip(s1,s2)
    f=""
    for a,b in c:
        if a==b:
            f+=a
        else:
            f+="0"
    return f


print(neutralise("--++--", "++--++"), "000000")
print(neutralise("-+-+-+", "-+-+-+"), "-+-+-+")
print(neutralise("-++-", "-+-+"), "-+00")
print(neutralise("--++", "++++"), "00++")
print(neutralise("+++--+---", "++----++-"), "++0--000-")
print(neutralise("-----", "-----"), "-----")
print(neutralise("-+", "++"), "0+")
print(neutralise("--", "-+"), "-0")
print(neutralise("-++", "+--"), "000")
