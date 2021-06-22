
# https://edabit.com/challenge/JPfqYkt6KGhpwfYK7
def replace_the(txt):
    t=txt.split()
    o=["an","a"]
    f=[]
    s="aeiou"
    for i in range(1,len(t)+1):
        if t[i-1]=="the" and t[i][0] in s:
            f.append(o[0])
        elif t[i-1]=="the" and t[i][0] not in s:
            f.append(o[1])
        else:
            f.append(t[i-1])
    return " ".join(f)

print(replace_the("the dog and the envelope"), "a dog and an envelope")
print(replace_the("the boy ran at the wall"), "a boy ran at a wall")
print(replace_the("the egg, the spoon and the espionage"), "an egg, a spoon and an espionage")
print(replace_the("where is the spoon"), "where is a spoon")
print(replace_the("the quick brown fox jumps over the lazy dog"), "a quick brown fox jumps over a lazy dog")
print(replace_the("this edabit thing is quite neat"), "this edabit thing is quite neat")
print(replace_the("the lion, witch and the wardrobe"), "a lion, witch and a wardrobe")
print(replace_the("enter the correct password to access the epic program"), "enter a correct password to access an epic program")
print(replace_the("the man blew the final candle out and all was dark"), "a man blew a final candle out and all was dark")
print(replace_the("the ant ate the egg salad which the eel had been intending to eat over the weekend"), "an ant ate an egg salad which an eel had been intending to eat over a weekend")
print(replace_the("this the random english sentence which you have to pass"), "this a random english sentence which you have to pass")
