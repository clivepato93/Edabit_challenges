# https://edabit.com/challenge/MFteyMABeuGaga3a7
def color_pattern_times(cols):
    l=len(cols)*2
    switch=0
    for i in range(1,len(cols)):
        if cols[i-1]!=cols[i]:
            switch+=1
    return switch+l

print(color_pattern_times(["Red", "Green", "Blue", "Yellow", "Red", "Red", "Yellow", "Green", "Green", "Green", "Red", "Blue", "Yellow", "Blue", "Green", "Green", "Red", "Red", "Red", "Blue", "Green", "Red", "Blue", "Blue", "Red", "Blue"]), 70)
print(color_pattern_times(["Red", "Blue", "Yellow", "Blue", "Green", "Green", "Yellow", "Green", "Blue", "Blue", "Blue", "Red", "Blue", "Red", "Green", "Red"]), 44)
print(color_pattern_times(["Yellow", "Green", "Blue"]), 8)
print(color_pattern_times(["Green", "Green", "Red", "Green", "Yellow", "Red", "Red", "Green", "Red", "Green"]), 27)
print(color_pattern_times(["Red"]), 2)
