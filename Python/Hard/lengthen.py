# https://edabit.com/challenge/dRjHygERcDJpiDzze

def lengthen(s1, s2):
    s1,s2=min([s1,s2],key=len),max([s1,s2],key=len)
    return s1+''.join([s1[i%len(s1)] for i in range(0,int(len(s2)-len(s1)))])


print(lengthen("abcdefg", "ab"), "abababa")
print(lengthen("ingenius", "forest"), "forestfo")
print(lengthen("skipping", "clap"), "clapclap")
print(lengthen("k", "champagne"), "kkkkkkkkk")
print(lengthen("DUH", "champagne"), "DUHDUHDUH")
