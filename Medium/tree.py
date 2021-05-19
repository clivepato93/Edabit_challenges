# https://edabit.com/challenge/vYYfFAAfjoc8crCqu

def tree(h):
    t=[]
    for i in range(1,h*2,2):
        t.append("#"*i)
    return [i.center(h*2-1," ") for i in t]


print(tree(1), ["#"])

print(tree(2), [
	" # ",
	"###"
])

print(tree(5), [
	"    #    ",
	"   ###   ",
	"  #####  ",
	" ####### ",
	"#########"
])

print(tree(0), [])
