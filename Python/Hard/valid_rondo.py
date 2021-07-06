# https://edabit.com/challenge/stXWy2iufNhBo9sTW

def valid_rondo(s):
    if s[0]!="A" or s[-1]!="A" or len(s)<3:
        return False
    return all(s[i]!=s[i+1] for i in range(0,len(s)-1)) and all(s[i]!=s[i+2] for i in range(1,len(s)-2,2))
    # print([s[i] for i in range(1,len(s)-1,2)])

print(valid_rondo("ABACADAEAFAGAHAIAJA"), True)
print(valid_rondo("ABA"), True)
print(valid_rondo("ABBACCA"), False)
print(valid_rondo("ACAC"), False)
print(valid_rondo("A"), False)
print(valid_rondo("AB"), False)
print(valid_rondo("ABAC"), False)
print(valid_rondo("ABACA"), True)
print(valid_rondo("ABACADA"), True)
print(valid_rondo("ABACADAEA"), True)
