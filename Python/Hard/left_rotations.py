# https://edabit.com/challenge/9RvRFtg67AkYiy3vN
def left_rotations(txt):
    return [txt[i:]+txt[:i] for i in range(0,len(txt))]

def right_rotations(txt):
    return [txt[i:]+txt[:i] for i in range(len(txt),0,-1)]

print(left_rotations("abc"), ["abc", "bca", "cab"])
print(right_rotations("abc"), ["abc", "cab", "bca"])
