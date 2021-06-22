# https://edabit.com/challenge/uv6NvSydCGB7jKAyu

def is_parsel_tongue(s):
    n=[]
    s=s.lower().split()
    for word in s:
        for i in range(0,len(word)-1):
            if 's' not in word:
                n.append(True)
                break
            elif word[i+1]=="s" and word[i]=='s':
                n.append(True)
                break
            elif word[i+1]!="s" and word[i]=='s':
                n.append(False)
                break

    return all(n)


print(is_parsel_tongue("Sshe ssselects to eat that apple."), True)
print(is_parsel_tongue("She ssselects to eat that apple."), False)
print(is_parsel_tongue("You ssseldom sssspeak sso boldly, ssso messmerizingly."), True)
print(is_parsel_tongue("Steve likes to eat pancakes"), False)
print(is_parsel_tongue("Sssteve likess to eat pancakess"), True)
print(is_parsel_tongue("Beatrice samples lemonade"), False)
print(is_parsel_tongue("Beatrice enjoysss lemonade"), True)
