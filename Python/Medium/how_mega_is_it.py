# https://edabit.com/challenge/n3zH5NvzPXb2qd5N5
def how_mega_is_it(n):
    n=abs(int(n))
    m="MEGA "*(len(str(n))-2)
    # return n
    return ["not a mega milestone",m+"milestone"][n>=100]



print(how_mega_is_it(54), "not a mega milestone")
print(how_mega_is_it(143), "MEGA milestone")
print(how_mega_is_it(1000), "MEGA MEGA milestone")
print(how_mega_is_it(9999.9), "MEGA MEGA milestone")
print(how_mega_is_it(-9999.9), "MEGA MEGA milestone")
print(how_mega_is_it(10000), "MEGA MEGA MEGA milestone")
print(how_mega_is_it(710005), "MEGA MEGA MEGA MEGA milestone")
print(how_mega_is_it(0), "not a mega milestone")
print(how_mega_is_it(387482), "MEGA MEGA MEGA MEGA milestone")
print(how_mega_is_it(20850088393226388232424), "MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA milestone")
