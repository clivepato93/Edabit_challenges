# https://edabit.com/challenge/3W2TRbuD2cnBoXuby

def collect(s, n):
    return sorted([s[i:i+n] for i in range(0,len(s),n) if len(s[i:i+n])==n]) if n<=len(s) else []

print(collect("tsktsk",6))
print(collect("intercontinentalisationalism",6))
print(collect("strengths",3))
