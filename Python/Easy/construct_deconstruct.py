# https://edabit.com/challenge/rwPguhgju54AMR2kM
# orginal version
def construct_deconstruct(s):
    f=[]
    for number in range(0,len(s)+1):
        f.append(s[0:number])
    for number in range(0,len(s)+1):
        f.append(s[0:len(s)-number-1])
    return f[1:-2]

# improved to avoiding uncessary slicing at the end
def construct_deconstruct(s):
    f=[]
    for number in range(1,len(s)+1):
        f.append(s[:number])
    for number in range(1,len(s)):
        f.append(s[:len(s)-number])
    return f

def construct_deconstruct(s):
    f=[]
    for number in range(1,len(s)+1):
        f.append(s[:number])
    for number in range(len(s),0,-1):
        f.append(s[:number])
    return f

print(construct_deconstruct("Hello"), [
	"H",
	"He",
	"Hel",
	"Hell",
	"Hello",
	"Hell",
	"Hel",
	"He",
	"H"
])
