# https://edabit.com/challenge/ENJTPoWCyEGgnXYjM
def percent_filled(box):
    box = [val for row in box for val in row]
    spaces=box.count(" ")
    o=box.count("o")
    a=spaces+o
    return str(int(round(float(o)/a*100)))+"%"

print(percent_filled([
	"####",
	"#  #",
	"#o #",
	"####"
]), "25%", "One element out of four spaces.")

print(percent_filled([
	"#######",
	"#o oo #",
	"#######"
]), "60%", "Three elements out of five spaces.")

print(percent_filled([
	"######",
	"#ooo #",
	"#oo  #",
	"#    #",
	"#    #",
	"######"
]), "31%", "Five elements out of sixteen spaces.")

print(percent_filled([
	"####",
	"#  #",
	"####"
]), "0%", "Zero elements out of two spaces.")

print(percent_filled([
	"###",
	"#o#",
	"###"
]), "100%", "One element out of one space.")
