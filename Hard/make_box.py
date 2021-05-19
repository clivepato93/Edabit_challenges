# https://edabit.com/challenge/dy3WWJr34gSGRPLee
def make_box(n):
    e="#"*n
    if n<3:
        return [e for i in range(1,n+1)]
    f=[]
    for i in range(1,n+1):
        if i==1 or i==n:
            f.append(e)
        else:
            a=(e[0]+" "*(n-2)+e[0])
            f.append(a)
    return f

print(make_box(5), [
		"#####",
		"#   #",
		"#   #",
		"#   #",
		"#####"
])

print(make_box(6), [
		"######",
		"#    #",
		"#    #",
		"#    #",
		"#    #",
		"######"
])

print(make_box(2), [
		"##",
		"##"
])

print(make_box(1), [
		"#"
])

print(make_box(4), [
    "####",
    "#  #",
    "#  #",
    "####"
])
