# https://edabit.com/challenge/HDGiiCmSgJeeu3388

def choose_fuse(fuses, current):
    fuses=sorted([float(str(i[:-1])) for i in fuses if float(str(i[:-1]))>=float(str(current[:-1]))])
    return str(int(fuses[0]))+"V"

print(choose_fuse(["3V", "5V", "12V"], "4.5V"), "5V")
print(choose_fuse(["5V", "14V", "2V"], "5.5V"), "14V")
print(choose_fuse(["17V", "15V", "12V"], "9V"), "12V")
print(choose_fuse(["1V", "2V", "3V"], "2.5V"), "3V")
print(choose_fuse(["17V", "15V", "12V"], "1V"), "12V")
print(choose_fuse(["7V", "135V", "12V"], "9.5V"), "12V")
print(choose_fuse(["17V", "15V", "12V"], "17V"), "17V")
print(choose_fuse(["3V", "11V", "12V"], "4.5V"), "11V")
print(choose_fuse(["3V", "5V", "12V"], "0.5V"), "3V")
