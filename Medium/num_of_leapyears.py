def num_of_leapyears(years):
    y=years.index("-")
    f=[]
    for i in range(int(years[:y]),int(years[y+1:])+1):
        if not(i%400) and not(i%100):
            f.append(i)
        elif not(i%4) and i%100:
            f.append(i)
    return len(f)

print(num_of_leapyears("2000-2020"), 6)
print(num_of_leapyears("1600-2000"), 98)
print(num_of_leapyears("1980-1984"), 2)
print(num_of_leapyears("1224-8090"), 1666)
print(num_of_leapyears("2486-7607"), 1241)
print(num_of_leapyears("1813-4354"), 616)
print(num_of_leapyears("772-1849"), 262)
print(num_of_leapyears("2228-7099"), 1182)
print(num_of_leapyears("1349-6325"), 1206)
print(num_of_leapyears("1803-3828"), 492)
print(num_of_leapyears("295-6278"), 1451)
print(num_of_leapyears("107-1821"), 416)
print(num_of_leapyears("2912-6566"), 887)
print(num_of_leapyears("1006-5181"), 1013)
print(num_of_leapyears("2876-9210"), 1536)
print(num_of_leapyears("1189-5481"), 1041)
print(num_of_leapyears("1325-1409"), 20)
print(num_of_leapyears("2665-3338"), 163)
print(num_of_leapyears("1886-3577"), 410)
print(num_of_leapyears("2951-4523"), 381)
print(num_of_leapyears("2651-7572"), 1194)
