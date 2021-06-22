import math
def is_sastry(n):
    n=int(str(n)+str(n+1))
    c=math.sqrt(n)
    # return math.sqrt(int(str(n)+str(n+1)))
    return True if int(c)==c else False

print(is_sastry(183), True, "Example #1")
print(is_sastry(184), False, "Example #2")
