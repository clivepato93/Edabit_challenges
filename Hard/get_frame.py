# https://edabit.com/challenge/wEr6R9kc5oG88FRYy

def get_frame(w, h, ch):
    if w<3 or h<3:
        return "invalid"
    e=ch*w
    x=e[0]+(w-2)*" "+e[-1]
    f=[]
    for i in range(0,h):
        if i==0 or i==h-1:
            f.append([e])
        else:
            f.append([x])
    return f

print(get_frame(3, 3, "0"), [
	["000"],
	["0 0"],
	["000"]
])

print(get_frame(4, 5, "#"), [
	["####"],
	["#  #"],
	["#  #"],
	["#  #"],
	["####"]
])

print(get_frame(10, 3, "*"), [
	["**********"],
	["*        *"],
	["**********"]
])

print(get_frame(2, 5, "0"), "invalid")

# A right mess
print(get_frame(1, 6, "["), "invalid")
print(get_frame(5, 4, "z"), [["zzzzz"], ["z   z"], ["z   z"], ["zzzzz"]])
print(get_frame(3, 4, "A"), [["AAA"], ["A A"], ["A A"], ["AAA"]])
