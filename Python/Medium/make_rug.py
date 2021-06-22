# https://edabit.com/challenge/xR248CxGSsSrNK5Za
def make_rug(m, n, s="#"):
    final=[]
    for i in range(1,m+1):
        final.append(n*s)
    return final

def make_rug(m, n, s="#"):
    return [n*s for i in range(1,m+1)]

print(make_rug(3, 5), [
	"#####",
	"#####",
	"#####"
])

print(make_rug(3, 5, '$'), [
	"$$$$$",
	"$$$$$",
	"$$$$$"
])
