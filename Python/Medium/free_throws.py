# https://edabit.com/challenge/vSpfEnRHo3hi6ZTRks
def free_throws(success, rows):
    s=float(success[:-1])/100
    f=100
    for i in range(1,rows+1):
        f*=s
    return "{}%".format(int(round(f)))

def free_throws(success, rows):
    return "{}%".format(round((float(success[:-1])/100)**rows*100))

print(free_throws("50%", 5), "3%")
print(free_throws("75%", 10), "6%")
print(free_throws("25%", 3), "2%")
print(free_throws("90%", 30), "4%")
