# https://edabit.com/challenge/Cm9fAzNkWWdzit23N

def wave(txt):
    lst=[]
    n=0
    while n!=len(txt):
        # for i,v in enumerate(txt):
        if txt[n]!=" ":
            lst.append(txt[:n]+txt[n].upper()+txt[n+1:])
        # else:
            # lst.append(txt[:n+1]+txt[n+1].upper()+txt[n+1])
        n+=1
    return lst



print(wave("edabit"), ["Edabit", "eDabit", "edAbit", "edaBit", "edabIt", "edabiT"])
print(wave("dogs cats pigs"), ["Dogs cats pigs", "dOgs cats pigs", "doGs cats pigs", "dogS cats pigs", "dogs Cats pigs", "dogs cAts pigs", "dogs caTs pigs", "dogs catS pigs", "dogs cats Pigs", "dogs cats pIgs", "dogs cats piGs", "dogs cats pigS"], "Ignore spaces.")
print(wave(" "), [], "Ignore spaces.")
print(wave(""), [], "An empty string should return an empty array.")
print(wave("g"), ["G"])
print(wave(" blue"), [" Blue", " bLue", " blUe", " bluE"], "Space at the beginning.")
print(wave("green "), ["Green ", "gReen ", "grEen ", "greEn ", "greeN "], "Space at the end.")
