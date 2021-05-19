# https://edabit.com/challenge/994QjWPmdhaR94DeF
def get_birthday_cake(name, age):
    f=["#","*"][age%2]
    bday="{} {} Happy Birthday {}! {} {}".format(f,age,name,age,f)
    return [f*len(bday),bday,f*len(bday)]




print(get_birthday_cake("Jack", 10), [
	"##############################",
	"# 10 Happy Birthday Jack! 10 #",
	"##############################"
])

print(get_birthday_cake("Russell", 19), [
	"*********************************",
	"* 19 Happy Birthday Russell! 19 *",
	"*********************************"
])
