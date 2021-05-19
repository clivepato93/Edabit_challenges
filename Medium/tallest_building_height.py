# https://edabit.com/challenge/LuBtaT9dwStbd7mnK
def tallest_building_height(lst):
    return str(len([i for i,v in enumerate(lst) if "#" in v])*20)+"m"
    # return str([i for i,v in enumerate(lst)][-1]*20)+"m"

print(tallest_building_height([
	"         ",
	" ##      ",
	" ##      ",
	"###   ## ",
	"###   ## ",
	"###   ###",
	"###   ###"
]), "120m")

print(tallest_building_height([
	"            ##",
	"            ##",
	"            ##",
	"###   ###   ##",
	"###   ###   ###",
	"###   ###   ###",
	"###   ###   ###"
]), "140m")
