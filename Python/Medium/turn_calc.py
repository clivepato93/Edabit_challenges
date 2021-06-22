
# https://edabit.com/challenge/uRSeMB39t2g2jNpW9
def turn_calc(num):
    num=[int(i) for i in str(num) if i.isdigit()]
    d={1:"I",
       2:"Z",
       3:"E",
       4:"H",
       5:"S",
       6:"G",
       7:"L",
       8:"B",
       9:"-",
       0:"O"}
    s=""
    for i in num:
        if i not in d:
            continue
        s+=d.get(i,"")
    return s[::-1]


print(turn_calc(0.7734), "HELLO", "convert the numbers into corresponding letters.")
print(turn_calc(3045), "SHOE", "convert the numbers into corresponding letters.")
print(turn_calc(5508), "BOSS")
print(turn_calc(707), "LOL")
print(turn_calc(57108), "BOILS")
print(turn_calc(3781637), "LEGIBLE")
print(turn_calc(35380), "OBESE")
print(turn_calc(461375), "SLEIGH")
print(turn_calc(5355378), "BLESSES")
print(turn_calc(38076), "GLOBE")
print(turn_calc(35006), "GOOSE")
print(turn_calc(8075), "SLOB")
