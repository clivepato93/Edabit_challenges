# https://edabit.com/challenge/MAzBohC2PxchT3wqK

def shadow_sentence(a, b):
    a,b=[word for word in a.split()],[word for word in b.split()]
    if len(a)!=(len(b)):
        return False
    for i in range(len(a)):
        word1,word2=a[i],b[i]
        if len(word1)!=len(word2) or any(l in word2 for l in word1):
            return False
    return True


print(shadow_sentence('they are round', 'fold two times'), True)
print(shadow_sentence('impossible poetry', 'gargantuan cliffs'), True)
print(shadow_sentence('seemingly unlimited', 'cutthroat crossbows'), True)
print(shadow_sentence('empty cookie jar', 'adorn fluffy wig'), True)

print(shadow_sentence('own a boat', 'buy my wine'), False)
print(shadow_sentence('his friends', 'our company'), False)
print(shadow_sentence('a normal sentence', 'a normal sentence'), False)
print(shadow_sentence('salmonella supper', 'birthright'), False)
